// ---------- element references ----------
const welcomeScreen = document.getElementById("welcome");
const enterButton = document.getElementById("enterButton");

const navButtons = document.querySelectorAll(".nav-btn");
const articleText = document.getElementById("articleText");
const magazineSection = document.getElementById("magazineSection");
const subscriptionSection = document.getElementById("subscriptionSection");

const chapterButtons = document.querySelectorAll(".chapter-btn");
const chapterText = document.getElementById("chapterText");

const donateToggle = document.getElementById("donateToggle");
const donationForm = document.getElementById("donationForm");
const donateSubmit = document.getElementById("donateSubmit");
const donationStatus = document.getElementById("donationStatus");
const donationAmount = document.getElementById("donationAmount");
const currencyType = document.getElementById("currencyType");

const subscribeButton = document.getElementById("subscribeButton");
const emailInput = document.getElementById("emailInput");
const statusMsg = document.getElementById("statusMsg");

// ---------- welcome screen ----------
enterButton.addEventListener("click", () => {
  welcomeScreen.classList.add("hidden");
});

// ---------- About / Contact copy ----------
const sectionContent = {
  about: `
    <h2 class="content-heading">About This Magazine</h2>
    <p>Rolling Stone Magazine is a space where faith meets everyday life. Here, stories, reflections, and honest encouragement come together to help you navigate life's seasons with hope, purpose, and grace.</p>
  `,
  contact: `
    <h2 class="content-heading">We'd Love to Hear From You</h2>
    <p>No story is too small, and no question is out of place here. Whether you have a testimony to share, a word of encouragement, or simply need someone to pray with you — reach out. We read everything, and we answer with care.</p>
    <dl class="donation-info">
      <dt>Phone</dt>
      <dd>0813 247 6794</dd>
    </dl>
    <p>"Call to me and I will answer you." — Jeremiah 33:3</p>
  `,
};

// ---------- top nav switching ----------
navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    navButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const key = btn.dataset.section;

    // hide all three view containers first
    articleText.style.display = "none";
    magazineSection.style.display = "none";
    subscriptionSection.style.display = "none";

    if (key === "magazine") {
      magazineSection.style.display = "block";
    } else if (key === "subscription") {
      subscriptionSection.style.display = "block";
    } else {
      articleText.style.display = "block";
      articleText.innerHTML = sectionContent[key];
    }
  });
});

// ---------- magazine chapters ----------
const chapterContent = {
  faith: `
    <h2 class="content-heading">Faith Beyond the Stage</h2>
    <p>Faith is a source of hope, purpose, strength, and meaning in a changing world. Life can bring disappointment and uncertainty, but difficult seasons do not have to determine our future.</p>
    <p>The message encourages readers to:</p>
    <ul class="faith-list">
      <li>Trust God and remain hopeful.</li>
      <li>Show kindness, compassion, and forgiveness.</li>
      <li>Discover and pursue their God-given purpose.</li>
      <li>Learn and grow through difficult experiences.</li>
      <li>Remember that mistakes do not define an entire life.</li>
      <li>Keep praying, believing, loving, and moving forward.</li>
    </ul>
    <p><strong>Main message:</strong> Your story is still being written. Faith can bring hope, courage, peace, and the possibility of a new beginning. 🙏✨</p>
  `,
  lifestyle: `
    <h2 class="content-heading">Lifestyle — Live Better, Be You</h2>
    <p>Faith isn't separate from daily life — it shapes how we work, rest, and treat the people around us. This chapter is about the small, steady choices that add up to a life well lived: showing up with integrity, caring for your body and mind, and finding contentment in the ordinary moments.</p>
    <p>You don't need a perfect routine to live well. You just need to keep choosing, one day at a time, to be fully yourself.</p>
  `,
  inspiration: `
    <h2 class="content-heading">Inspiration — Real Stories, Greater Possibilities</h2>
    <p>Behind every testimony is someone who kept going when it would have been easier to stop. This chapter gathers real stories of resilience, second chances, and quiet breakthroughs — reminders that whatever you're facing, you are not the first to walk through it, and you won't be the last to come out stronger.</p>
    <p>Let these stories be fuel, not comparison. Your breakthrough is still being written.</p>
  `,
};

chapterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    chapterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const key = btn.dataset.chapter;
    chapterText.innerHTML = chapterContent[key];
  });
});

// ---------- donation ----------
donateToggle.addEventListener("click", () => {
  const isOpen = donationForm.style.display === "block";
  donationForm.style.display = isOpen ? "none" : "block";
});

donateSubmit.addEventListener("click", () => {
  const amount = donationAmount.value.trim();
  const currency = currencyType.value;

  if (amount && Number(amount) > 0) {
    donationStatus.textContent = `Thank you — please send ${Number(amount).toFixed(2)} ${currency} to United Bank of Africa (UBA), account name Christy Muri, account number 2038925090.`;
  } else {
    donationStatus.textContent =
      "Thank you — any amount you send to United Bank of Africa (UBA), account name Christy Muri, account number 2038925090, is deeply appreciated.";
  }
});

// ---------- subscription ----------
subscribeButton.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValid) {
    statusMsg.textContent = "Please enter a valid email address.";
    return;
  }

  statusMsg.textContent = `Thank you — you're subscribed as ${email}.`;
  emailInput.value = "";
});
