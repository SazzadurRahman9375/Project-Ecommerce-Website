$(() => {
    let db;
    const request = indexedDB.open("db1279378");
    request.onerror = (event) => {
      console.error("Error opening db!");
    };
    request.onsuccess = (event) => {
      db = event.target.result;
      readDb(db);
      
    };
    request.onupgradeneeded = (event) => {
      console.log("upgrade");
      // Save the IDBDatabase interface
      db = event.target.result;

      // Create an objectStore for this database
      if (!db.objectStoreNames.contains("products")) {
        db.createObjectStore("products", {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    };
    ///////////////////////////
    let data = sessionStorage.getItem("login-data");
    let isLoggedIn = false;
    if (data) {
      data = JSON.parse(data);
      isLoggedIn = true;
    }
    if (isLoggedIn) {
      $("#admin").show();
     
      $("#login").hide();
      $("#register").hide();
     
    } else {
      $("#admin").hide();
     
      $("#login").show();
      $("#login").show();

    }
  });
  function readDb(db) {
    //console.log(db);
    let recordCount = 0;

    const trx = db.transaction(["products"], "readonly");
    trx.oncomplete = (event) => {
      console.log(recordCount);
      if (recordCount < 1) {
        insert(db);
      }

      console.log("count done");
    };
    const store = trx.objectStore("products");
    count = store.count();

    count.onsuccess = function () {
      recordCount = count.result;
      //console.log(count.result);
    };
  }
  function insert(db) {
   
      const transaction = db.transaction(["products"], "readwrite");
      const objectStore = transaction.objectStore("products");
      for (var i = 0; i < initialData.length; i++) {
        const query = objectStore.add(initialData[i]);
        query.onsuccess = () => {
          console.log('done');
        };
      }
    
  }
 


  let Hide = function(){
    document.getElementById("info").style.display = 'none';
  }
  let Show = function(){
    document.getElementById("info").style.display = 'block';

  }
  let projectHide = function(){
    document.getElementById("projectinfo").style.display = 'none';
  }
  let projectShow = function(){
    document.getElementById("projectinfo").style.display = 'block';

  }
