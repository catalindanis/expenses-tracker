import { router } from "expo-router";
import { db } from "../firebase/firebaseConfig";
import { ref, set, get, child } from "firebase/database";
import { useEffect, useState } from "react";

const wallets = {
  nrPortofele: null,
  idPortofele: [],

  init(setLoading) {
   setTimeout(() => {
    setLoading(false);
   }, 1000)
  },
};

function getNumberOfWallets() {
  let value = -1;
  let finished = false;

  get(child(ref(db), "/detalii/nrPortofele"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("No data available");
      }
      finished = true;
    })
    .catch((error) => {
      console.error(error);
      finished = true;
    });
}

function getIdPortofele(nrPortofele) {
  setTimeout(() => {
    console.log(nrPortofele);
  }, 100);
}

function loadWallets() {
  let data = [{ label: "Nu este selectat", value: "-1" }];

  let nrPortofele = -1;
  get(child(ref(db), "/detalii/nrPortofele"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        nrPortofele = snapshot.val();

        if (nrPortofele == -1) return;

        for (let index = 0; index < nrPortofele; index++) {
          get(child(ref(db), "portofel" + index + "/detalii/"))
            .then((snapshot) => {
              if (snapshot.exists()) {
                console.log(snapshot.val());
              } else {
                console.log("No data available");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        }
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return data;
}

function resetWallets() {
  set(ref(db, "/detalii/"), {
    idPortofele: [0, 1, 2],
    nrPortofele: 0,
  });
}

function createWallet(name) {
  let walletId = -1,
    nrPortofele = -1;
  let finished = false;
  get(child(ref(db), `/detalii/ultimulIdPortofel`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        walletId = snapshot.val();
        get(child(ref(db), `/detalii/nrPortofele`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              nrPortofele = snapshot.val();
              if (walletId == -1 || nrPortofele == -1) {
                console.log("EROARE");
                return;
              }

              set(ref(db, "/detalii/"), {
                ultimulIdPortofel: walletId + 1,
                nrPortofele: nrPortofele + 1,
              });

              set(ref(db, "portofel" + walletId + "/detalii/"), {
                id: walletId,
                nume: name,
                ultimulIdCheltuiala: 0,
                nrCheltuieli: 0,
              });
            } else {
              console.log("No data available");
            }
            finished = true;
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

function addExpense(value, description, walletId, type) {
  set(ref(db, "portofel" + walletId + "/" + "1"), {
    id: "1",
    valoare: value,
    descriere: description,
    idPortofel: walletId,
    tip: type,
  });
}

function resetDB() {
  set(ref(db, "/"), {});
  resetWallets();
}

export { wallets };
