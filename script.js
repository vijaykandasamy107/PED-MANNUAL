document.getElementById('checkBtn').addEventListener('click', () => {
  const input = document.getElementById('diseaseInput').value.toLowerCase().trim();
  const resultDiv = document.getElementById('result');

  const outrightDeclines = [
    "cancer", "cad", "cabg", "ptca", "heart attack", "stroke", "cva", "paralysis",
    "multiple sclerosis", "epilepsy", "seizure", "brain tumour", "ataxia", "chorea",
    "motor neurone disease", "muscular dystrophy", "cerebral palsy", "copd", "ild",
    "osa", "hepatitis b", "hepatitis c", "cirrhosis", "liver failure", "ckd",
    "chronic kidney disease", "kidney failure", "nephrotic syndrome", "nephritic syndrome",
    "polycystic kidney", "pancreatitis", "lupus", "rheumatoid arthritis",
    "ankylosing spondylitis", "inflammatory bowel disease", "pituitary disorder",
    "adrenal disorder", "parathyroid disorder", "mental retardation", "sickle cell",
    "thalassemia", "haemophilia", "bone marrow disorder", "type 1 diabetes", "diabetes on insulin",
    "pediatric cardiac", "congenital heart", "valve disease", "heart failure"
  ];

  const abbreviations = ["ckd", "cad", "cabg", "ptca", "osa", "ild", "copd", "sleb", "ra", "ibd", "t1dm", "t2dm", "htn", "dm", "cva", "mi", "rhd"];
  const comboTriggers = ["diabetes", "hypertension", "lipid", "cholesterol", "obesity", "high bmi", "smoking"];

  const entries = input.split(/[,\n]+/).map(e => e.trim()).filter(Boolean);
  let comboHits = 0;
  let declineHits = [];

  entries.forEach(e => {
    if (outrightDeclines.some(d => e.includes(d))) {
      declineHits.push(e);
    }
    if (abbreviations.some(a => e === a)) {
      declineHits.push(e);
    }
    if (comboTriggers.some(c => e.includes(c))) {
      comboHits += 1;
    }
  });

  if (comboHits >= 3) {
    resultDiv.innerHTML = `<span style='color:red;'><b>Declined in the normal health insurance plan.</b><br>Try your luck with a specialized plan exclusively meant for CUSTOMERS WITH PED.</span>`;
    return;
  }

  if (declineHits.length > 0) {
    resultDiv.innerHTML = `<span style='color:red;'><b>Declined due to:</b> ${declineHits.join(", ")}</span>`;
  } else {
    resultDiv.innerHTML = `<span style='color:lightgreen;'><b>Accepted</b></span>`;
  }
});