const toggle = () => {
    let isChecked = document.getElementById("toggleCheckBox").checked;
  
    let colorWhite = document.getElementsByClassName("colorWhite");
    let totalFollowers = document.getElementsByClassName("totalFollowers");
    let userName = document.getElementsByClassName("userName");
    let rowCard = document.getElementsByClassName("rowCard");
    let custombg = document.getElementsByClassName("custombg");
  
    if (isChecked) {
      document.getElementById("body").style.backgroundColor = "#FFFFFF";
      document.getElementById("overViewToday").style.color = "#63687D";
      document.getElementById("hr").style.borderTop = "1px solid #848BAB";
  
      for (let index = 0; index < colorWhite.length; index++) {
        colorWhite[index].style.color = "#1D1F29";
      }
  
      for (let index = 0; index < totalFollowers.length; index++) {
        totalFollowers[index].style.color = "#63687D";
      }
  
      for (let index = 0; index < userName.length; index++) {
        userName[index].style.color = "#63687D";
      }
  
      for (let index = 0; index < rowCard.length; index++) {
        rowCard[index].style.setProperty("background-Color", "#F1F3FA", "important");
      }
  
      for (let index = 0; index < custombg.length; index++) {
        custombg[index].style.backgroundColor = "#F7F9FF";
      }
    } else {
      document.getElementById("body").style.backgroundColor = "#1D1F29";
      document.getElementById("overViewToday").style.color = "#FFFFFF";
      document.getElementById("hr").style.borderTop = "1px solid #333a55";
  
      for (let index = 0; index < colorWhite.length; index++) {
        colorWhite[index].style.color = "#FFFFFF";
      }
  
      for (let index = 0; index < totalFollowers.length; index++) {
        totalFollowers[index].style.color = "#8c98c6";
      }
  
      for (let index = 0; index < userName.length; index++) {
        userName[index].style.color = "#8c98c6";
      }
  
      for (let index = 0; index < rowCard.length; index++) {
        rowCard[index].style.setProperty("background-Color", "#252b42", "important");
      }
      for (let index = 0; index < custombg.length; index++) {
        custombg[index].style.backgroundColor = "#20222f";
      }
    }
  };
  
  const cardColorEnter = (param) => {
    let isChecked = document.getElementById("toggleCheckBox").checked;
    let rowCard = document.getElementsByClassName("rowCard");
  
    if (isChecked) {
      for (let index = 0; index < rowCard.length; index++) {
        if (param == index) {
          rowCard[index].style.setProperty("background-Color", "#E1E4F0", "important");
        } else {
          rowCard[index].style.setProperty("background-Color", "#F1F3FA", "important");
        }
      }
    } else {
      for (let index = 0; index < rowCard.length; index++) {
        if (param == index) {
          rowCard[index].style.setProperty("background-Color", "#333A55", "important");
        } else {
          rowCard[index].style.setProperty("background-Color", "#252B42", "important");
        }
      }
    }
  };
  
  const cardColorLeave = (param) => {
    let isChecked = document.getElementById("toggleCheckBox").checked;
    let rowCard = document.getElementsByClassName("rowCard");
  
    if (isChecked) {
      for (let index = 0; index < rowCard.length; index++) {
        rowCard[index].style.setProperty("background-Color", "#F1F3FA", "important");
      }
    } else {
      for (let index = 0; index < rowCard.length; index++) {
        rowCard[index].style.setProperty("background-Color", "#252B42", "important");
      }
    }
  };
  