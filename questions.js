document.addEventListener("DOMContentLoaded", function () {
  const unitQuestions = {
    unit1: [
      "9618_s21_qp_11_q_1.png",
      "9618_s21_qp_12_q_6.png",
      "9618_s21_qp_13_q_1.png",
      "9618_s22_qp_13_q_1.png",
      "9618_s23_qp_11_q_1.png",
      "9618_s23_qp_12_q_4.png",
      "9618_s23_qp_13_q_7.png",
      "9618_w21_qp_11_q_7.png",
      "9618_w22_qp_11_q_1.png",
      "9618_w22_qp_12_q_2.png",
      "9618_w22_qp_12_q_8.png",
      "9618_w22_qp_12_q_9.png",
      "9618_w22_qp_13_q_9.png",
    ],
    unit2: [
      "9618_s21_qp_11_q_4.png",
      "9618_s21_qp_13_q_4.png",
      "9618_s22_qp_12_q_9.png",
      "9618_s22_qp_13_q_8.png",
      "9618_s23_qp_12_q_1.png",
      "9618_s23_qp_13_q_2.png",
      "9618_s23_qp_13_q_6.png",
      "9618_w21_qp_11_q_8.png",
      "9618_w22_qp_12_q_1.png",
      "9618_w22_qp_12_q_6.png",
      "9618_w22_qp_13_q_7.png",
    ],
    unit3: [
      "9618_s21_qp_11_q_5.png",
      "9618_s21_qp_11_q_8.png",
      "9618_s21_qp_12_q_3.png",
      "9618_s21_qp_13_q_5.png",
      "9618_s21_qp_13_q_8.png",
      "9618_s22_qp_12_q_2.png",
      "9618_s22_qp_13_q_7.png",
      "9618_s23_qp_11_q_4.png",
      "9618_s23_qp_11_q_5.png",
      "9618_s23_qp_12_q_6.png",
      "9618_s23_qp_13_q_1.png",
      "9618_s23_qp_13_q_3.png",
      "9618_w21_qp_11_q_3.png",
      "9618_w22_qp_11_q_3.png",
      "9618_w22_qp_12_q_3.png",
      "9618_w22_qp_13_q_1.png",
      "9618_w22_qp_13_q_5.png",
    ],
    unit4: [
      "9618_s21_qp_11_q_3.png",
      "9618_s21_qp_12_q_4.png",
      "9618_s21_qp_12_q_5.png",
      "9618_s21_qp_13_q_3.png",
      "9618_s22_qp_12_q_3.png",
      "9618_s22_qp_13_q_2.png",
      "9618_s22_qp_13_q_3.png",
      "9618_s22_qp_31_q_9.png",
      "9618_s22_qp_33_q_9.png",
      "9618_s23_qp_11_q_6.png",
      "9618_s23_qp_12_q_3.png",
      "9618_s23_qp_12_q_5.png",
      "9618_w21_qp_11_q_1.png",
      "9618_w21_qp_11_q_6.png",
      "9618_w21_qp_12_q_8.png",
      "9618_w22_qp_11_q_5.png",
      "9618_w22_qp_11_q_6.png",
      "9618_w22_qp_12_q_7.png",
      "9618_w22_qp_13_q_4.png",
    ],
    unit5: [
      "9618_s21_qp_11_q_2.png",
      "9618_s21_qp_12_q_7.png",
      "9618_s21_qp_13_q_2.png",
      "9618_s22_qp_12_q_6.png",
      "9618_s22_qp_13_q_4.png",
      "9618_s23_qp_11_q_3.png",
      "9618_s23_qp_12_q_7.png",
      "9618_s23_qp_13_q_5.png",
      "9618_w22_qp_11_q_7.png",
      "9618_w22_qp_13_q_3.png",
    ],
    unit6: [
      "9618_s21_qp_11_q_6.png",
      "9618_s21_qp_12_q_8.png",
      "9618_s21_qp_13_q_6.png",
      "9618_s22_qp_12_q_4.png",
      "9618_s22_qp_13_q_5.png",
      "9618_w21_qp_11_q_2.png",
      "9618_w22_qp_11_q_2.png",
      "9618_w22_qp_12_q_4.png",
    ],
    unit7: ["9618_w21_qp_11_q_4.png", "9618_w22_qp_13_q_8.png"],
    unit8: [
      "9618_s21_qp_11_q_7.png",
      "9618_s21_qp_12_q_1.png",
      "9618_s21_qp_13_q_7.png",
      "9618_s22_qp_13_q_6.png",
      "9618_s23_qp_11_q_2.png",
      "9618_s23_qp_12_q_2.png",
      "9618_s23_qp_13_q_4.png",
      "9618_w21_qp_11_q_5.png",
      "9618_w22_qp_11_q_4.png",
      "9618_w22_qp_12_q_5.png",
      "9618_w22_qp_13_q_2.png",
    ],
    unit9: [
      "9618_s21_qp_21_q_1.png",
      "9618_s21_qp_21_q_2.png",
      "9618_s22_qp_22_q_1.png",
      "9618_s22_qp_22_q_2.png",
      "9618_s23_qp_21_q_2.png",
      "9618_s23_qp_21_q_7.png",
      "9618_s23_qp_23_q_7.png",
      "9618_w22_qp_21_q_2.png",
      "9618_w22_qp_23_q_2.png",
      "9618_w22_qp_23_q_3.png",
    ],
    unit10: [
      "9618_s21_qp_21_q_6.png",
      "9618_s21_qp_22_q_1.png",
      "9618_s21_qp_22_q_3.png",
      "9618_s21_qp_23_q_6.png",
      "9618_s23_qp_21_q_3.png",
      "9618_s23_qp_22_q_3.png",
      "9618_s23_qp_23_q_3.png",
      "9618_w22_qp_21_q_4.png",
      "9618_w22_qp_22_q_3.png",
      "9618_w22_qp_23_q_4.png",
    ],
    unit11: [
      "9618_s21_qp_21_q_3.png",
      "9618_s21_qp_21_q_5.png",
      "9618_s21_qp_21_q_7.png",
      "9618_s21_qp_22_q_4.png",
      "9618_s21_qp_22_q_5.png",
      "9618_s21_qp_22_q_6.png",
      "9618_s21_qp_22_q_7.png",
      "9618_s21_qp_22_q_8.png",
      "9618_s21_qp_23_q_1.png",
      "9618_s21_qp_23_q_2.png",
      "9618_s21_qp_23_q_3.png",
      "9618_s21_qp_23_q_4.png",
      "9618_s21_qp_23_q_5.png",
      "9618_s21_qp_23_q_7.png",
      "9618_s22_qp_22_q_4.png",
      "9618_s22_qp_22_q_5.png",
      "9618_s22_qp_22_q_6.png",
      "9618_s22_qp_22_q_7.png",
      "9618_s22_qp_22_q_8.png",
      "9618_s22_qp_23_q_1.png",
      "9618_s22_qp_23_q_5.png",
      "9618_s22_qp_23_q_6.png",
      "9618_s22_qp_23_q_7.png",
      "9618_s22_qp_23_q_9.png",
      "9618_s23_qp_21_q_1.png",
      "9618_s23_qp_21_q_4.png",
      "9618_s23_qp_21_q_6.png",
      "9618_s23_qp_21_q_8.png",
      "9618_s23_qp_22_q_1.png",
      "9618_s23_qp_22_q_2.png",
      "9618_s23_qp_22_q_4.png",
      "9618_s23_qp_22_q_5.png",
      "9618_s23_qp_22_q_6.png",
      "9618_s23_qp_22_q_7.png",
      "9618_s23_qp_22_q_8.png",
      "9618_s23_qp_23_q_1.png",
      "9618_s23_qp_23_q_2.png",
      "9618_s23_qp_23_q_4.png",
      "9618_s23_qp_23_q_6.png",
      "9618_s23_qp_23_q_8.png",
      "9618_w22_qp_21_q_1.png",
      "9618_w22_qp_21_q_3.png",
      "9618_w22_qp_21_q_5.png",
      "9618_w22_qp_21_q_6.png",
      "9618_w22_qp_21_q_7.png",
      "9618_w22_qp_21_q_8.png",
      "9618_w22_qp_22_q_1.png",
      "9618_w22_qp_22_q_5.png",
      "9618_w22_qp_22_q_6.png",
      "9618_w22_qp_22_q_7.png",
      "9618_w22_qp_23_q_5.png",
      "9618_w22_qp_23_q_6.png",
      "9618_w22_qp_23_q_7.png",
    ],
    unit12: [
      "9618_s21_qp_21_q_4.png",
      "9618_s21_qp_22_q_2.png",
      "9618_s22_qp_22_q_3.png",
      "9618_s22_qp_23_q_2.png",
      "9618_s22_qp_23_q_3.png",
      "9618_s22_qp_23_q_4.png",
      "9618_s22_qp_23_q_8.png",
      "9618_s23_qp_21_q_5.png",
      "9618_s23_qp_23_q_5.png",
      "9618_w22_qp_22_q_2.png",
      "9618_w22_qp_23_q_1.png",
    ],
    unit13: [
      "9618_s21_qp_31_q_1.png",
      "9618_s21_qp_31_q_2.png",
      "9618_s21_qp_32_q_1.png",
      "9618_s21_qp_32_q_2.png",
      "9618_s21_qp_33_q_1.png",
      "9618_s21_qp_33_q_2.png",
      "9618_s22_qp_31_q_1.png",
      "9618_s22_qp_32_q_1.png",
      "9618_s22_qp_33_q_1.png",
      "9618_s23_qp_31_q_3.png",
      "9618_s23_qp_32_q_2.png",
      "9618_s23_qp_32_q_6.png",
      "9618_s23_qp_33_q_3.png",
      "9618_w21_qp_31_q_5.png",
      "9618_w21_qp_32_q_5.png",
      "9618_w22_qp_31_q_2.png",
      "9618_w22_qp_31_q_3.png",
      "9618_w22_qp_32_q_4.png",
      "9618_w22_qp_33_q_3.png",
    ],
    unit14: [
      "9618_s21_qp_31_q_6.png",
      "9618_s21_qp_32_q_6.png",
      "9618_s21_qp_33_q_6.png",
      "9618_s22_qp_31_q_3.png",
      "9618_s22_qp_32_q_3.png",
      "9618_s22_qp_33_q_3.png",
      "9618_s23_qp_32_q_7.png",
      "9618_w21_qp_31_q_6.png",
      "9618_w21_qp_32_q_6.png",
      "9618_w22_qp_33_q_2.png",
    ],
    unit15: [
      "9618_s21_qp_31_q_7.png",
      "9618_s21_qp_32_q_7.png",
      "9618_s21_qp_33_q_7.png",
      "9618_s22_qp_31_q_4.png",
      "9618_s22_qp_31_q_6.png",
      "9618_s22_qp_32_q_5.png",
      "9618_s22_qp_32_q_6.png",
      "9618_s22_qp_33_q_4.png",
      "9618_s22_qp_33_q_6.png",
      "9618_s23_qp_31_q_7.png",
      "9618_s23_qp_32_q_8.png",
      "9618_s23_qp_32_q_9.png",
      "9618_s23_qp_33_q_7.png",
      "9618_w21_qp_31_q_7.png",
      "9618_w21_qp_32_q_1.png",
      "9618_w21_qp_32_q_7.png",
      "9618_w22_qp_31_q_1.png",
      "9618_w22_qp_31_q_7.png",
      "9618_w22_qp_32_q_5.png",
      "9618_w22_qp_32_q_8.png",
      "9618_w22_qp_33_q_1.png",
      "9618_w22_qp_33_q_7.png",
    ],
    unit16: [
      "9618_s21_qp_31_q_4.png",
      "9618_s21_qp_32_q_4.png",
      "9618_s21_qp_33_q_4.png",
      "9618_s22_qp_31_q_5.png",
      "9618_s22_qp_32_q_4.png",
      "9618_s22_qp_33_q_5.png",
      "9618_s23_qp_31_q_6.png",
      "9618_s23_qp_32_q_3.png",
      "9618_s23_qp_33_q_6.png",
      "9618_w21_qp_31_q_4.png",
      "9618_w21_qp_32_q_4.png",
      "9618_w22_qp_31_q_4.png",
      "9618_w22_qp_32_q_9.png",
      "9618_w22_qp_33_q_4.png",
    ],
    unit17: [
      "9618_s22_qp_31_q_8.png",
      "9618_s22_qp_32_q_7.png",
      "9618_s22_qp_33_q_8.png",
      "9618_w21_qp_31_q_8.png",
      "9618_w21_qp_32_q_8.png",
    ],
    unit18: [
      "9618_s21_qp_31_q_5.png",
      "9618_s21_qp_32_q_5.png",
      "9618_s21_qp_33_q_5.png",
      "9618_s23_qp_31_q_2.png",
      "9618_s23_qp_33_q_2.png",
      "9618_w21_qp_31_q_9.png",
      "9618_w21_qp_32_q_9.png",
    ],
    unit19: [
      "9618_s21_qp_31_q_8.png",
      "9618_s21_qp_32_q_8.png",
      "9618_s21_qp_33_q_8.png",
      "9618_s22_qp_32_q_8.png",
      "9618_s23_qp_31_q_1.png",
      "9618_s23_qp_33_q_1.png",
      "9618_w21_qp_31_q_1.png",
    ],
    unit20: [
      "9618_s21_qp_31_q_9.png",
      "9618_s21_qp_32_q_9.png",
      "9618_s21_qp_33_q_9.png",
      "9618_s22_qp_31_q_2.png",
      "9618_s22_qp_32_q_2.png",
      "9618_s22_qp_32_q_9.png",
      "9618_s22_qp_33_q_2.png",
      "9618_w22_qp_32_q_1.png",
    ],
    unit21: [
      "9618_s21_qp_41_q_1.png",
      "9618_s22_qp_41_q_3.png",	
      "9618_s23_qp_43_q_2.png",
      "9618_s21_qp_41_q_3.png",
      "9618_s22_qp_42_q_1.png",	
      "9618_w21_qp_41_q_1.png",
      "9618_s21_qp_42_q_1.png",
      "9618_s22_qp_43_q_1.png",	
      "9618_w21_qp_41_q_3.png",
      "9618_s21_qp_42_q_3.png",
      "9618_s22_qp_43_q_2.png",
      "9618_w21_qp_42_q_1.png",
      "9618_s21_qp_43_q_1.png",
      "9618_s22_qp_43_q_3.png",
      "9618_w21_qp_42_q_3.png",
      "9618_s21_qp_43_q_3.png",
      "9618_s23_qp_41_q_1.png",
      "9618_w22_qp_41_q_1.png",
      "9618_s22_qp_41_q_1.png",	
      "9618_s23_qp_41_q_2.png",
      "9618_w22_qp_42_q_1.png",
      "9618_s22_qp_41_q_2.png",
      "9618_s23_qp_43_q_1.png",
      "9618_w22_qp_43_q_1.png",
    ],
  };
  // Function to open mark scheme for the current question
    function getQuestionAnswer() {
    
    console.info("Answer Path", answerPath);
    displayAnswer(answerPath);
    }
  // Function to get a random question from the selected units
  function getRandomQuestion() {
    const selectedUnits = Array.from(
      document.querySelectorAll(".unit-checkbox:checked")
    ).map((checkbox) => checkbox.value);
    const questions = selectedUnits.flatMap((unit) =>
      unitQuestions[unit]
        ? unitQuestions[unit].map((filename) => `${unit}/${filename}`)
        : []
    );

    if (questions.length > 0) {
      const randomIndex = Math.floor(Math.random() * questions.length);
      const randomQuestionPath = questions[randomIndex];
      console.info("Random Question Path", randomQuestionPath);
      displayQuestion(randomQuestionPath);
    } else {
      console.error("No questions available for the selected units");
    }
  }

  // Function to display the selected question
  function displayQuestion(questionPath) {
    const questionDisplay = document.getElementById("questionDisplay");
    const imagePath = `./assets/${questionPath}`;
    console.log("Generated image path:", imagePath); // Debug: See what path is being generated
    questionDisplay.innerHTML = `<img src="${imagePath}" alt="Random Question">`;
  }

  // Generate checkboxes for each unit
  function generateUnitCheckboxes() {
    const unitRanges = [
      { start: 1, end: 8, column: "column1" },
      { start: 9, end: 12, column: "column2" },
      { start: 13, end: 20, column: "column3" },
      { start: 19, end: 21, column: "column4" },
    ];

    unitRanges.forEach((range) => {
      const columnElement = document.getElementById(range.column);
      for (let i = range.start; i <= range.end; i++) {
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `unit${i}-${range.column}`;
        checkbox.value = `unit${i}`;
        checkbox.classList.add("unit-checkbox");
        checkbox.dataset.unit = `unit${i}`;

        const label = document.createElement("label");
        label.htmlFor = `unit${i}-${range.column}`;
        label.textContent = `Unit ${i}`;

        columnElement.appendChild(checkbox);
        columnElement.appendChild(label);
        columnElement.appendChild(document.createElement("br"));

        // Special handling for linked units 19 and 20
        if (i >= 19) {
          checkbox.addEventListener("change", function () {
            document
              .querySelectorAll(`input[data-unit="${this.dataset.unit}"]`)
              .forEach((linkedCheckbox) => {
                linkedCheckbox.checked = this.checked;
              });
          });
        }
      }
    });
  }

  // Function to update all checkboxes when a "Select All" checkbox is changed
  function updateCheckboxes(column, isChecked) {
    document
      .querySelectorAll(`#${column} .unit-checkbox`)
      .forEach((unitCheckbox) => {
        unitCheckbox.checked = isChecked;

        // Trigger change event for linked units 19 and 20
        if (
          unitCheckbox.dataset.unit === "unit19" ||
          unitCheckbox.dataset.unit === "unit20"
        ) {
          unitCheckbox.dispatchEvent(new Event("change"));
        }
      });
  }

  // Attach event listener to "Select All" checkboxes
  document.querySelectorAll(".select-all").forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const column = this.dataset.column;
      updateCheckboxes(column, this.checked);
    });
  });

  // Function to update the "Select All" checkbox based on the state of the individual checkboxes
  function updateSelectAllCheckbox(column) {
    const allCheckboxes = Array.from(
      document.querySelectorAll(`#${column} .unit-checkbox`)
    );
    const selectAllCheckbox = document.querySelector(`#${column} .select-all`);
    selectAllCheckbox.checked = allCheckboxes.every(
      (checkbox) => checkbox.checked
    );
    selectAllCheckbox.indeterminate =
      !selectAllCheckbox.checked &&
      allCheckboxes.some((checkbox) => checkbox.checked);
  }

  // Attach event listener to individual unit checkboxes to update "Select All" state
  document.querySelectorAll(".unit-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const column = this.closest(".column").id;
      updateSelectAllCheckbox(column);
    });
  });

  generateUnitCheckboxes();


  // Function to open the modal
    function openModal() {
        populateModalInfo();
        const modal = document.getElementById("questionInfoModal");
        modal.style.display = "block";
    }

    document.querySelector(".close").addEventListener("click", function() {
        const modal = document.getElementById("questionInfoModal");
        modal.style.display = "none";
    });

    function populateModalInfo() {
        const filePathElement = document.getElementById("filePath");
        const unitInfoElement = document.getElementById("unitInfo");
        const paperInfoElement = document.getElementById("paperNumber");
        const questionNoElement = document.getElementById("questionNumber");
    
        // Fetch the current displayed question's path from the image's src attribute
        const displayedQuestion = document.getElementById("questionDisplay").querySelector("img");
        const questionPath = displayedQuestion ? displayedQuestion.getAttribute("src") : null;
        const question = questionPath.replace(/\.\/assets\/unit\d+\//, "");

        console.log(question);
        // Set the file path to the modal's content
        filePathElement.textContent = question || "No question displayed.";
    
        // Extract the unit number from the question path
        const unitMatch = questionPath && questionPath.match(/unit(\d+)/);
        const unitNumber = unitMatch && unitMatch[1];
    
        // Set the unit information
        unitInfoElement.textContent = unitNumber ? `Unit ${unitNumber}` : "No unit information available.";
        
        // Extract the paper number from the questions path

        const paperMatch = questionPath && questionPath.match(/qp_(\d)/);
        const paperNumber = paperMatch ? paperMatch[1] : null;

        // Set the paper information
        paperInfoElement.textContent = paperNumber ? `Paper ${paperNumber}` : "No paper information available.";

        // Extract the question number from the question path
        const questionNoMatch = questionPath && questionPath.match(/q_(\d)/);
        const questionNo = questionNoMatch ? questionNoMatch[1] : null;

        // Set the question number information
        questionNoElement.textContent = questionNo ? `Question ${questionNo}` : "No question number information available.";

        console.log("Current Question Path:", questionPath);
        console.log("Current Unit Number:", unitNumber);

    }
    
    
    
    


  // Attach the getRandomQuestion function to a button
  document
    .getElementById("randomQuestionButton")
    .addEventListener("click", getRandomQuestion);
  document
    .getElementById("getQuestionAnswerButton")
    .addEventListener("click", getQuestionAnswer);

    document.getElementById("getQuestionInfoButton").addEventListener("click", function() {
        openModal();
    });
    
});

