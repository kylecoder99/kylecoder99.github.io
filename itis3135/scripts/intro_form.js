function addCourse() {
  const container = document.getElementById("courses");

  const div = document.createElement("div");

  div.innerHTML = `
    <input type="text" placeholder="Dept" required>
    <input type="text" placeholder="Number" required>
    <input type="text" placeholder="Course Name" required>
    <input type="text" placeholder="Reason" required>
    <button type="button" onclick="this.parentElement.remove()">Delete</button>
  `;

  container.appendChild(div);
}

function clearForm() {
  const form = document.getElementById("introForm");

  Array.from(form.elements).forEach(el => {
    if (el.type === "text" || el.type === "date" || el.tagName === "TEXTAREA" || el.type === "url") {
      el.value = "";
    }
    if (el.type === "file") {
      el.value = null;
    }
  });

  document.getElementById("courses").innerHTML = "";
  addCourse();
}

document.getElementById("introForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const data = {
    firstName: document.getElementById("firstName").value,
    middleName: document.getElementById("middleName").value,
    nickname: document.getElementById("nickname").value,
    lastName: document.getElementById("lastName").value,
    acknowledgement: document.getElementById("ack").value,
    date: document.getElementById("date").value,
    mascot: document.getElementById("adj").value + " " + document.getElementById("animal").value,
    divider: document.getElementById("divider").value,
    caption: document.getElementById("caption").value,
    personal: document.getElementById("personal").value,
    personalBackground: document.getElementById("pb").value,
    professionalBackground: document.getElementById("prof").value,
    academicBackground: document.getElementById("acad").value,
    webBackground: document.getElementById("web").value,
    platform: document.getElementById("platform").value,
    quote: document.getElementById("quote").value,
    author: document.getElementById("author").value,
    funny: document.getElementById("funny").value,
    share: document.getElementById("share").value
  };

  const courses = Array.from(document.querySelectorAll("#courses > div")).map(div => {
    const inputs = div.querySelectorAll("input");
    return {
      dept: inputs[0].value,
      number: inputs[1].value,
      name: inputs[2].value,
      reason: inputs[3].value
    };
  });

  data.courses = courses;

  localStorage.setItem("introData", JSON.stringify(data));

  alert("Form submitted successfully!");
});