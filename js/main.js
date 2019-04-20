    var badgerCallback = function(txid) {
      console.log("Success. Transaction ID:", txid)
      var confirmedElement = document.getElementById("confirmed")
      confirmedElement.innerText = "Confirmed. Transaction ID: " + txid
    }
