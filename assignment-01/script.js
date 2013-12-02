var doc = document,
    docBody = document.body,
    bannerTag = doc.createElement("banner"), // create <banner> tag
    leftTag = doc.createElement("left"), // create <left> tag
    rightTag = doc.createElement("right"), // create <right> tag

    bannerTxt = doc.createTextNode("Banner"), // Add text to Banner tag
    leftTxt = doc.createTextNode("Left"), // Add text to Left tag
    rightTxt = doc.createTextNode("Right"); // Add text to Right tag

// ===== Banner Tag =====
bannerTag.style.height = "200px"; // add height property to the <banner> tag
bannerTag.style.width = "100%"; // add width property to the <banner> tag
bannerTag.style.backgroundColor = "green"; // add background-color property to the <banner> tag
bannerTag.style.display = "block"; // add the display property to display the <banner> tag  
bannerTag.appendChild(bannerTxt);

docBody.appendChild(bannerTag); // append the created <banner> tag to the body tag

// ===== Left Tag =====
leftTag.style.height = "750px"; // add height property to the <left> tag
leftTag.style.width = "50%"; // add width property to the <left> tag
leftTag.style.background = "yellow"; // add background-color property to the <left> tag
leftTag.style.display = "inline-block"; // add the display property to display the <left> tag
leftTag.appendChild(leftTxt);

docBody.appendChild(leftTag); // append the created <left> tag to the body tag

// ===== Right Tag =====
rightTag.style.height = "750px"; // add height property to the <right> tag
rightTag.style.width = "50%"; // add width property to the <right> tag
rightTag.style.background = "blue"; // add background-color property to the <right> tag
rightTag.style.display = "inline-block"; // add the display property to display the <right> tag 
rightTag.appendChild(rightTxt);

docBody.appendChild(rightTag); // append the created <right> tag to the body tag

// ===== Remove Banner Tag =====
// docBody.removeChild(LeftTag);