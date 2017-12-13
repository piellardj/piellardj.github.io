"use strict";

const UI = (function() {
  const visible = {
    hasClass: function(element, className) {
      return element.className.includes(" " + className + " ") ||
             element.className.endsWith(" " + className) ||
             element.className.indexOf(className + " ") === 0 ||
             element.className === className;
    },
    
    removeClass: function(element, className) {
      const regExps = [
        new RegExp("^" + className + "$"),
        new RegExp("^" + className + " "),
        new RegExp(" " + className + " ", "g"),
        new RegExp(" " + className + "$"),];
      
      for (let regex of regExps) {
        element.className = element.className.replace(regex, "");
      }
    },
    
    addClass: function(element, className) {
      if (!this.hasClass(element, className)) {
        element.className += " " + className + " ";
      }
    }
  };
  
  return Object.freeze(visible);
})();

const ButtonGroup = (function() {
  function select(event) {
    const elt = event.currentTarget;
    
    if (UI.hasClass(elt, "selected")){
      UI.removeClass(elt, "selected");
    } else {
      UI.addClass(elt, "selected");
    }
    
    elt.blur();
  }

  function selectUnique(event) {
    const elt = event.currentTarget;
    const siblings = elt.parentElement.childNodes;

    for (let iButton = 0; iButton < siblings.length; ++iButton) {
      const sibling = siblings[iButton];
        if (sibling.tagName == 'BUTTON' && !sibling.disabled) {
          UI.removeClass(sibling, "selected");
        }
    }

    UI.addClass(elt, "selected");
    elt.blur();
  }

  function initialize() {
    const buttonGroups = document.getElementsByClassName("button-group");
    for (let iG = 0; iG < buttonGroups.length; ++iG) {
      const group = buttonGroups[iG];
      const func = (UI.hasClass(group, "unique")) ? selectUnique : select;
      
      const children = group.childNodes;
      for (let iC = 0 ; iC < children.length ; ++iC) {
        const child = children[iC];
        if (child.tagName === 'BUTTON' && !child.disabled) {
          child.addEventListener("click", func);
        }
      }     
    }
  }
  
  initialize();
  
  const visible = {
    initialize: initialize,
  };
  
  return Object.freeze(visible);
})();

const CardReveal = (function() {
  
  function adjust(cardContent) {
    const card = cardContent.parentElement;
    const cardTitles = cardContent.getElementsByClassName("card-title");
    const cardTitle = (cardTitles.length > 0) ? cardTitles[0] : null;
    
    if (cardTitle === null) {
      return;
    }
    
    let transform = "";
    
    if (UI.hasClass(cardContent, "hidden")) {
      const dY = card.clientHeight - cardTitle.clientHeight;
      transform = "translateY(" + dY + "px)";
    }
    
    cardContent.style.webkitTransform = transform;
    cardContent.style.transform = transform;
  }
  
  function toggleVisibility(cardContent, setVisible=null) {
    if (setVisible === null) {
      setVisible = UI.hasClass(cardContent, "hidden");
    }
    
    if (setVisible) {
      UI.removeClass(cardContent, "hidden");
    } else {
      UI.addClass(cardContent, "hidden");
    }
    
    adjust(cardContent);
  }
  
  function initialize() {
    const cardContents = document.getElementsByClassName("card-content card-reveal");
    for (let i = 0; i < cardContents.length; ++i) {
      const cardContent = cardContents[i];
      toggleVisibility(cardContent, false);
      
      const card = cardContent.parentElement;
      card.addEventListener("mouseenter", (e) =>
        { toggleVisibility(cardContent, true); }, false);
      card.addEventListener("mouseleave", (e) =>
        { toggleVisibility(cardContent, false); }, false);
    }
  }
  
  initialize();
  
  const visible = {
  };
  
  return Object.freeze(visible);
})();