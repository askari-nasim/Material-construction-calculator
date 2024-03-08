let $ = document;
var body = document.getElementsByTagName('body')[0];
//Selecting elements from DOM
const frame70Btn = $.querySelector(".frame-70");
const frame100Btn = $.querySelector(".frame-100");
const lengthInput = $.querySelector(".length-input");
const heightSelect = $.querySelector(".high-select");
const halfheightSelect = $.querySelector(".half-height");
const mainfieldSelect = $.querySelector(".main-length-select");
const typeSelect = $.querySelector(".type-select");
const footSelect = $.querySelector(".foot-select");
const gcouplingInput = $.querySelector(".G-coupling");
const fcouplingInput = $.querySelector(".F-coupling");
const dcouplingInput = $.querySelector(".D-coupling");
const bBcouplingInput = $.querySelector(".Bb-coupling");
const travers70erInput = $.querySelector(".travers-70er");
const travers100erInput = $.querySelector(".travers-100er");
const lengthValidSpan = $.querySelector(".length-validation");
const heightValidSpan = $.querySelector(".height-validation");
const mainfieldValidSpan = $.querySelector(".mainfield-validation");
const typeValidSpan = $.querySelector(".type-validation");
const footValidSpan = $.querySelector(".foot-validation");
const frameResult = $.getElementById("frame");
const sheetResult = $.getElementById("sheet");
const ladderResult = $.getElementById("ladder");
const railingResult = $.getElementById("railing");
const woodguardResult = $.getElementById("woodguard");
const diagonaleResult = $.getElementById("diagonale");
const footResult = $.getElementById("foot");
const boardResult = $.getElementById("board");
const meterbockResult = $.getElementById("meterbock");
const fenceResult = $.getElementById("fence");
const gcouplingShow = $.getElementById("g-coupling");
const fcouplingShow = $.getElementById("f-coupling");
const dcouplingShow = $.getElementById("d-coupling");
const bBcouplingShow = $.getElementById("b-coupling");
const travers70Show = $.getElementById("travers-70");
const travers100Show = $.getElementById("travers-100");
const erUnitModalSpans = Array.from($.querySelectorAll('.frame-er-unit-modal'));
const meterUnitModalSpans = Array.from($.querySelectorAll('.meter-unit-modal'));
const sheetTypeModalSpan = $.querySelector(".blage-type-modal");
const fubeErUnitModalSpan = $.querySelector(".fube-er-unit-modal");
const calBtn = $.querySelector(".cal-btn");
const resultModal = $.getElementById("resultModal");
const backdrop = $.querySelector('.modal-backdrop');

//A function for checking all input's and select's values
const checkFormValidation = () => {
  let allIsValid = true;

  //Validating length Input
  if (lengthInput.value.trim() === "") {
    lengthValidSpan.classList.remove("d-none");
    lengthValidSpan.innerHTML = "Wert eingeben";
    allIsValid = false;
  } else if (Number(lengthInput.value) < 2 || Number(lengthInput.value) > 100) {
    lengthValidSpan.classList.remove("d-none");
    lengthValidSpan.innerHTML =
      "Die Länge der Baustelle sollte zwischen 1m und 99m Metern liegen.";
    allIsValid = false;
  } else {
    lengthValidSpan.classList.remove("d-none");
    lengthValidSpan.classList.add("d-none");
    lengthValidSpan.innerHTML = "";
  }

  //Validating height Input
  if (heightSelect.value === "-1") {
    heightValidSpan.classList.remove("d-none");
    lengthValidSpan.innerHTML = "Wert eingeben";
    allIsValid = false;
  } else {
    heightValidSpan.classList.remove("d-none");
    heightValidSpan.classList.add("d-none");
    heightValidSpan.innerHTML = "";
  }

  //Validating mainfield Input
  if (mainfieldSelect.value === "-1") {
    mainfieldValidSpan.classList.remove("d-none");
    mainfieldValidSpan.innerHTML = "Wert eingeben";
    allIsValid = false;
  } else {
    mainfieldValidSpan.classList.remove("d-none");
    mainfieldValidSpan.classList.add("d-none");
    mainfieldValidSpan.innerHTML = "";
  }

  //Validating type Input
  if (typeSelect.value === "-1") {
    typeValidSpan.classList.remove("d-none");
    typeValidSpan.innerHTML = "Wert eingeben";
    allIsValid = false;
  } else {
    typeValidSpan.classList.remove("d-none");
    typeValidSpan.classList.add("d-none");
    typeValidSpan.innerHTML = "";
  }

  //Validating foot Input
  if (footSelect.value === "-1") {
    footValidSpan.classList.remove("d-none");
    footValidSpan.innerHTML = "Wert eingeben";
    allIsValid = false;
  } else {
    footValidSpan.classList.remove("d-none");
    footValidSpan.classList.add("d-none");
    footValidSpan.innerHTML = "";
  }

  return allIsValid;
};

//A function for calculating results
const calculate = () => {
  const height = Number(heightSelect.value);
  const mainfield = Number(mainfieldSelect.value);
  const length = Number(lengthInput.value);
  let ladder = Math.ceil(height / 2);
  let sheet = (
    Math.ceil((((length / mainfield) + (length % mainfield)) * (height / 2) )- (height / 2))
  );
  let railing = ((sheet + ladder) * 3);
  let woodguard = Math.ceil(sheet + ladder);
  let diagonale = Math.ceil((length * height) / 9);
  let foot = Math.ceil((length / mainfield + (length % mainfield) + 1) * 2);
  let board = frame100Btn.checked ? (sheet + ladder) : 0;
  let meterbock = height % 2 ? Math.ceil(((sheet + ladder) / ladder) + 1) : 0;
  let fence = ((ladder + 1) * 2);
  let frame = frame70Btn.checked ? "70er" : "100er";
  let frameNumber = Math.ceil(((length/mainfield) + 1) * (Math.ceil(ladder)+1) - Math.ceil(meterbock))
  

  return {
    frameNumber,
    frame, 
    sheet,
    ladder,
    railing, 
    woodguard, 
    diagonale, 
    foot, 
    board, 
    meterbock, 
    fence,
  };
};

const setValueInModal = () => {
  const {
    frameNumber,
    frame,
    sheet,
    ladder,
    railing,
    woodguard,
    diagonale,
    foot,
    board,
    meterbock,
    fence,
  } = calculate();

  frameResult.innerHTML = frameNumber;
  sheetResult.innerHTML = sheet;
  sheetTypeModalSpan.innerHTML = typeSelect.value;
  ladderResult.innerHTML = ladder;
  railingResult.innerHTML = railing;
  woodguardResult.innerHTML = woodguard;
  diagonaleResult.innerHTML = diagonale;
  footResult.innerHTML = foot;
  fubeErUnitModalSpan.innerHTML = `${footSelect.value}er`;
  boardResult.innerHTML = board;
  meterbockResult.innerHTML = meterbock;
  fenceResult.innerHTML = fence;
  gcouplingShow.innerHTML = gcouplingInput.value;
  fcouplingShow.innerHTML = fcouplingInput.value;
  dcouplingShow.innerHTML = dcouplingInput.value;
  bBcouplingShow.innerHTML = bBcouplingInput.value;
  travers70Show.innerHTML = travers70erInput.value;
  travers100Show.innerHTML = travers100erInput.value;
  erUnitModalSpans.forEach(ele => ele.innerHTML = frame);
  meterUnitModalSpans.forEach(ele => ele.innerHTML = `${mainfieldSelect.value} meter`);
};

const showModal = () => {
  resultModal.style.display = "block";
  resultModal.classList.remove("show");
  resultModal.classList.add("show");
  backdrop.classList.remove('d-none');
  backdrop.style.opacity = 0.5;
};

const closeModal = () => {
  resultModal.style.display = "none";
  resultModal.classList.remove("show");
  backdrop.classList.remove('d-none');
  backdrop.classList.add('d-none');
  backdrop.style.opacity = 0;
};

const showResult = () => {
  if (checkFormValidation()) {
    showModal();
    setValueInModal();
  }
};

const checkFrameHandler = () => {
  frame100Btn.checked = true;
  frame70Btn.checked = false;
};

const halfHightHandler = () => {
  halfheightSelect.removeAttribute("disabled");
  halfheightSelect.querySelector("option").innerHTML =
    heightSelect.value / 2 + " Lage";
};

calBtn.addEventListener("click", showResult);

frame100Btn.addEventListener("click", checkFrameHandler);

heightSelect.addEventListener("change", halfHightHandler);

const generatePdf = () => {
  const {
    frameNumber,
    frame,
    sheet,
    ladder,
    railing,
    woodguard,
    diagonale,
    foot,
    board,
    meterbock,
    fence,
  } = calculate();
  var docDefinition = {
    content: [
      {
        text: "deutschland-geruestbau.de",
        link: 'https://deutschland-geruestbau.de/',
        fontSize: 10,
        bold: true,
        margin: [0, 40, 0, 8],
      },
      {
        text: "Material List:",
        fontSize: 14,
        bold: true,
        margin: [0, 20, 0, 8],
      },
      {
        style: "tableExample",
        table: {
          headerRows: 1,
          widths: [150, '*', 60, 100, '*'],
          body: [
            [
              { text: "Material", fontSize: 15, color: 'white', bold: true },
              { text: "Value", fontSize: 15, color: 'white', bold: true  },
              { text: "", fontSize: 15, color: 'white', bold: true  },
              { text: "Material", fontSize: 15, color: 'white', bold: true  },
              { text: "Value", fontSize: 15, color: 'white', bold: true  },
            ],
            [`Rahmen (${frame.toString()}):`, frameNumber.toString(), "", `Meterbock (${frame.toString()}):`, meterbock.toString() ],
            [`Bläge (${mainfieldSelect.value} meter) ${typeSelect.value}:`, sheet.toString(), "", `Affen (${frame.toString()}):`, fence.toString()],
            [`Leitergang (${mainfieldSelect.value} meter):`, ladder.toString(), "", "G-Kupplungen:", gcouplingInput.value.toString() ],
            [`Gelander (${mainfieldSelect.value} meter):`, railing.toString(), "", "F-Kupplungen:", fcouplingInput.value.toString() ],
            [`Bordbrett (${mainfieldSelect.value} meter):`, woodguard.toString(), "", "D-Kupplungen:", dcouplingInput.value.toString() ],
            [`Diagonale (${mainfieldSelect.value} meter):`, diagonale.toString(), "", "Bb-Kupplungen:", bBcouplingInput.value.toString() ],
            [`Fube (${footSelect.value}er):`, foot.toString(), "", "70er Travers:", travers70erInput.value.toString() ],
            [`Roste (${mainfieldSelect.value} meter):`, board.toString(), "", "100er Travers:", travers100erInput.value.toString() ],
          ],
        },
        layout: {
          fillColor: function (rowIndex, node, columnIndex) {
            return rowIndex === 0 ? "#6a94d4" : rowIndex % 2 === 0 ? "#f5f5f5" : "#fdfdfd";
          },
          defaultBorder: false,
        }
      },
    ],
  };

  pdfMake.createPdf(docDefinition).download('Material_List.pdf');
};
