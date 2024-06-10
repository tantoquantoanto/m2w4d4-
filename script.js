const jobs = [
  { title: "Marketing Intern", location: "US, NY, New York" },
  {
    title: "Customer Service - Cloud Video Production",
    location: "NZ, Auckland",
  },
  {
    title: "Commissioning Machinery Assistant (CMA)",
    location: "US, IA, Wever",
  },
  {
    title: "Account Executive - Washington DC",
    location: "US, DC, Washington",
  },
  { title: "Bill Review Manager", location: "US, FL, Fort Worth" },
  { title: "Accounting Clerk", location: "US, MD," },
  { title: "Head of Content (m/f)", location: "DE, BE, Berlin" },
  {
    title: "Lead Guest Service Specialist",
    location: "US, CA, San Francisco",
  },
  { title: "HP BSM SME", location: "US, FL, Pensacola" },
  {
    title: "Customer Service Associate - Part Time",
    location: "US, AZ, Phoenix",
  },
  {
    title: "ASP.net Developer Job opportunity at United States,New Jersey",
    location: "US, NJ, Jersey City",
  },
  {
    title: "Talent Sourcer (6 months fixed-term contract)",
    location: "GB, LND, London",
  },
  {
    title: "Applications Developer, Digital",
    location: "US, CT, Stamford",
  },
  { title: "Installers", location: "US, FL, Orlando" },

  { title: "Account Executive - Sydney", location: "AU, NSW, Sydney" },
  {
    title: "VP of Sales - Vault Dragon",
    location: "SG, 01, Singapore",
  },
  { title: "Hands-On QA Leader", location: "IL, Tel Aviv, Israel" },
  {
    title: "Southend-on-Sea Traineeships Under NAS 16-18 Year Olds Only",
    location: "GB, SOS, Southend-on-Sea",
  },
  { title: "Visual Designer", location: "US, NY, New York" },
  {
    title: "Process Controls Engineer - DCS PLC MS Office - PA",
    location: "US, PA, USA Northeast",
  },
  { title: "Marketing Assistant", location: "US, TX, Austin" },
  { title: "Front End Developer", location: "NZ, N, Auckland" },
  { title: "Engagement Manager", location: "AE," },
  {
    title: "Vice President, Sales and Sponsorship (Businessfriend.com)",
    location: "US, CA, Carlsbad",
  },
  { title: "Customer Service", location: "GB, LND, London" },
  { title: "H1B SPONSOR FOR L1/L2/OPT", location: "US, NY, New York" },
  { title: "Marketing Exec", location: "SG," },
  {
    title: "HAAD/DHA Licensed Doctors Opening in UAE",
    location: "AE, AZ, Abudhabi",
  },
  {
    title: "Talent Management Process Manager",
    location: "US, MO, St. Louis",
  },
  { title: "Customer Service Associate", location: "CA, ON, Toronto" },
  {
    title: "Customer Service Technical Specialist",
    location: "US, MA, Waltham",
  },
  { title: "Software Applications Specialist", location: "US, KS," },
  { title: "Craftsman Associate", location: "US, WA, Everett" },
  { title: "Completion Engineer", location: "US, CA, San Ramon" },
  { title: "I Want To Work At Karmarama", location: "GB, LND," },
  {
    title: "English Teacher Abroad",
    location: "US, NY, Saint Bonaventure",
  },
];

/*QUI HO COMMENTATO LA FUNZIONE CHE HO USATO PER LA SOLA PRIMA PARTE DELL?ESERCIZIO; CHE HO SUCCESSIVAMENTE IMPLEMENTATO PER LA SECONDA PARTE
 
 
function giveJobs(title, location) {
let gotJobs = jobs.filter(
  (job) =>
    job.title.toLowerCase().includes(title.toLowerCase()) &&
    job.location.toLowerCase().includes(location.toLowerCase())
);
console.log(gotJobs.length);
return gotJobs;
}


console.log(giveJobs("dev", "us"));
 */

let h3 = document.querySelector(".h3");
let btn = document.getElementById("search");
let userJobs = document.getElementById("userjobs");

function giveJobs(title, location) {
  if (title === "" || location === "") {
    userJobs.innerText = "Ti preghiamo di compilare entrambi i campi";
    return;
  }
  let gotJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(title.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase())
  );
  gotJobs.length === 0
    ? (userJobs.innerText =
        "Ci dispiace, non abbiamo trovato nessun lavoro che faccia al caso tuo")
    : gotJobs.forEach((gotJob) => {
        let result = document.createElement("li");
        result.classList.add("result");
        result.innerText = `${gotJob.title} ${gotJob.location}`;
        userJobs.appendChild(result);
        h3.classList.add("h3-visible");
        btn.classList.add("buttonclicked");
        result.classList.add("result");
        h3.innerText = "ABBIAMO TROVATO " + gotJobs.length + "  LAVORI PER TE";
      });
  console.log(gotJobs.length);
  /*
    l'avevo realizzato precedentemente con l'if, poi ho voluto provare con l'operatore ternario ed ho commentato l'if;
    if(gotJobs.length === 0) {
    userJobs.innerText = "Nessun lavoro trovato"
    } else {
      gotJobs.forEach((gotJob) => {
        let result = document.createElement("li");
        result.innerText = `${gotJob.title} ${  gotJob.location}`
        userJobs.appendChild(result);
        h3.classList.add("h3-visible");
        btn.classList.add("buttonclicked");
    
      })
    }*/
}

btn.addEventListener("click", () => {
  h3.innerHTML = "";
  userJobs.innerHTML = "";
  let userTitle = document.getElementById("usertitle").value;
  let userLocation = document.getElementById("userlocation").value;
  giveJobs(userTitle, userLocation);
});
