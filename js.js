/* ---------------------------
   Fresh Reads — script.js
   Handles article rotation, likes, and share
   --------------------------- */

// Extended article bank (20+ articles, multiple categories)
const articles = [
  // Money
  {
    title: "7 Side Hustles You Can Start with Little Capital",
    category: "Money",
    body: `
<p>Many believe you need large funds to start a business, but side hustles prove otherwise. In fact, some of today’s most successful businesses began as tiny ventures with little investment.</p>
<p><strong>1. Freelancing:</strong> Platforms like Upwork and Fiverr let you sell skills from writing to design.</p>
<p><strong>2. Mini importation:</strong> Buying items in bulk from wholesalers abroad and reselling locally.</p>
<p><strong>3. Social media reselling:</strong> List products online without keeping stock — partner with vendors for delivery.</p>
<p><strong>4. Laundry services:</strong> A steady need in cities, requiring only basic supplies to start.</p>
<p><strong>5. Tutoring:</strong> Both online and offline, parents pay well for quality education support.</p>
<p>Small beginnings grow into significant incomes when consistency and reinvestment are applied. Remember, financial independence is built step by step.</p>
`
  },
  {
    title: "Understanding Passive Income in 2025",
    category: "Money",
    body: `
<p>Passive income is money earned with little ongoing effort. In 2025, technology and digital platforms have made this more achievable than ever.</p>
<p>Examples include earning from digital products (like ebooks), affiliate marketing, real estate investments, or stock dividends. Setting up takes work, but once systems are in place, the revenue can flow while you sleep.</p>
<p>However, beware of scams that promise instant wealth. True passive income streams require upfront effort and discipline. The reward is long-term freedom and financial security.</p>
`
  },

  // Novels
  {
    title: "An Excerpt from a Short Novel: The Journey to Lagos",
    category: "Novel",
    body: `
<p>The bus rattled along the highway as the night stretched on. Tunde leaned against the glass, imagining the golden lights of Lagos shimmering in the distance. Each kilometer carried him closer to his dreams.</p>
<p>Back home, his mother’s words still echoed: “Never forget where you come from.” With a worn notebook in his pocket, filled with poems, he felt ready to face the unknown. That notebook was his anchor and his weapon.</p>
<p>As dawn revealed the skyline, a mix of fear and excitement surged. Lagos was calling. And he was ready to answer.</p>
`
  },
  {
    title: "The River Beyond the Forest",
    category: "Novel",
    body: `
<p>In the heart of a quiet village lay a secret path that led to a river no one dared to cross. Folktales warned of spirits beyond, but Adaeze was curious. With each step into the forest, she felt the weight of her ancestors urging her forward.</p>
<p>The river shimmered under the moonlight, silent yet alive. She placed her foot on the first stone, and in that moment, the stories became real. Adventure had begun.</p>
<p>This excerpt is part of a larger tale of courage, tradition, and self-discovery that resonates with anyone seeking their place in the world.</p>
`
  },

  // Entertainment
  {
    title: "Why Comedy Movies Heal the Soul",
    category: "Entertainment",
    body: `
<p>Laughter is more than entertainment — it’s medicine. Studies show comedy reduces stress, boosts immunity, and builds connection. From Nollywood classics to Netflix specials, comedy is humanity’s way of healing itself.</p>
<p>Think back to the last time you laughed until your stomach hurt. Didn’t the burdens feel lighter? Comedy reminds us that joy is always within reach, even in dark times.</p>
`
  },
  {
    title: "The Rise of Streaming Platforms in Africa",
    category: "Entertainment",
    body: `
<p>Streaming has transformed how Africans consume music, movies, and shows. Platforms like Showmax, Netflix, and Boomplay bring global and local stories to millions of devices.</p>
<p>This shift means opportunities for African creators to reach wider audiences without traditional gatekeepers. Nollywood, Afrobeats, and new storytellers are thriving in this digital era.</p>
<p>The future promises more original African content and global recognition.</p>
`
  },
  {
    title: "Random Fact: Bananas are Berries, Strawberries are Not!",
    category: "Fun Facts",
    body: `
<p>Did you know? Botanically speaking, bananas are classified as berries, while strawberries are not. Nature often surprises us with facts that flip what we thought we knew upside down.</p>
<p>So next time you grab a banana, remember — you’re eating a true berry.</p>
`
  },

  // Relationships
  {
    title: "5 Habits of Strong Relationships",
    category: "Relationships",
    body: `
<p>Healthy relationships are intentional. Here are five habits to practice:</p>
<ol>
<li>Active listening — hear to understand, not to reply.</li>
<li>Quality time — create shared memories.</li>
<li>Respect — even in disagreement, kindness prevails.</li>
<li>Forgiveness — grace keeps bonds alive.</li>
<li>Shared goals — moving together builds unity.</li>
</ol>
<p>Small, consistent acts of love grow into lasting connections.</p>
`
  },
  {
    title: "Modern Dating in the Digital Age",
    category: "Relationships",
    body: `
<p>Dating apps and social media have reshaped how people meet. While technology opens doors, it also brings challenges — ghosting, superficial connections, and information overload.</p>
<p>The key to navigating this landscape is authenticity. Present your real self, set clear boundaries, and prioritize safety. Technology should serve as a bridge, not a barrier, to genuine connection.</p>
`
  },

  // Religion
  {
    title: "Faith in Difficult Times",
    category: "Religion",
    body: `
<p>Every faith tradition carries stories of perseverance. Christianity speaks of David and Goliath; Islam recalls the Prophet’s trials; Buddhism highlights enlightenment through suffering.</p>
<p>The message is the same: storms are temporary, but faith endures. In hard times, prayer, meditation, and community bring strength. Faith doesn’t remove struggle — it gives courage to face it.</p>
`
  },
  {
    title: "The Power of Prayer and Meditation",
    category: "Religion",
    body: `
<p>Prayer and meditation center the heart. For centuries, humans have sought connection with the divine through quiet reflection. Whether in a church, mosque, temple, or home, the act is universal.</p>
<p>In 2025, with constant digital noise, these practices are more important than ever. They clear the mind, calm the spirit, and anchor us in gratitude.</p>
`
  },

  // Travel
  {
    title: "Top 5 Travel Destinations in Africa for 2025",
    category: "Travel",
    body: `
<p>Africa offers incredible destinations for adventure and relaxation:</p>
<ul>
<li>Zanzibar, Tanzania — exotic beaches and spice markets.</li>
<li>Cape Town, South Africa — Table Mountain and vibrant nightlife.</li>
<li>Marrakech, Morocco — colorful souks and desert culture.</li>
<li>Nairobi, Kenya — gateway to safari adventures.</li>
<li>Obudu, Nigeria — cool mountain resort with breathtaking views.</li>
</ul>
<p>Each destination offers a unique perspective on the continent’s richness.</p>
`
  },
  {
    title: "Budget Travel Tips for Students",
    category: "Travel",
    body: `
<p>Travel doesn’t have to be expensive. Students can explore the world with smart planning:</p>
<ol>
<li>Book tickets early to grab discounts.</li>
<li>Travel in groups to share costs.</li>
<li>Stay in hostels or budget Airbnbs.</li>
<li>Eat like a local instead of expensive restaurants.</li>
<li>Explore free attractions — parks, museums, cultural festivals.</li>
</ol>
<p>Adventure is possible on any budget when creativity leads the way.</p>
`
  },

  // Medicine & Health
  {
    title: "The Importance of Sleep for Good Health",
    category: "Health",
    body: `
<p>Sleep is not a luxury — it is a necessity. Without quality rest, the body cannot repair itself, memory weakens, and mood suffers.</p>
<p>Experts recommend 7–9 hours of sleep for adults. Healthy sleep improves immunity, reduces risk of chronic illness, and sharpens focus. Treat sleep as part of your wellness routine, not an afterthought.</p>
`
  },
  {
    title: "Everyday Foods That Boost Immunity",
    category: "Health",
    body: `
<p>You don’t need expensive supplements to stay strong. Everyday foods like citrus fruits, garlic, ginger, and leafy greens naturally boost your immune system.</p>
<p>Adding these to your meals strengthens your body’s defense while keeping meals delicious.</p>
`
  },

  // Short Night Stories
  {
    title: "Night Story: The Whispering Lamp",
    category: "Short Story",
    body: `
<p>In a small village, a lamp by the roadside was said to whisper secrets at midnight. Curious travelers paused to listen, only to hear their own thoughts spoken back to them.</p>
<p>It was not magic, but a reminder: in the silence of night, our hearts speak the loudest.</p>
`
  },
  {
    title: "Night Story: The Old Clock Tower",
    category: "Short Story",
    body: `
<p>At exactly midnight, the town’s old clock tower struck thirteen times instead of twelve. No one could explain why. Some said it was broken, others said it marked the hour when dreams turned real.</p>
<p>Whatever the truth, children of the town always stayed awake to hear it, hoping one day to catch their dreams stepping into the world.</p>
`
  },
  // Fun Facts
  {
    title: "Are Bananas Really Berries?",
    category: "Facts",
    body: `
  <p>Yes — bananas are technically berries, while strawberries are not! Botanically speaking, a berry is a fruit that develops from a single ovary and contains seeds inside. Bananas fit this description perfectly.</p>
  <p>Meanwhile, strawberries grow from multiple ovaries and are called aggregate fruits. Nature has a funny way of naming things, doesn’t it?</p>
  `
  },
  {
    title: "Octopuses Have Three Hearts",
    category: "Facts",
    body: `
  <p>An octopus doesn’t just have one heart — it has three! Two hearts pump blood to the gills, and one heart pumps it to the rest of the body.</p>
  <p>Even more interesting: the main heart actually stops beating when the octopus swims. Talk about a creature full of surprises!</p>
  `
  },
  {
    title: "Why Do We Yawn When Others Yawn?",
    category: "Human Behavior",
    body: `
  <p>Yawning is contagious — if you see someone yawn, chances are you’ll yawn too. Scientists believe this is linked to empathy and social bonding. When we mirror someone’s yawn, it’s like our brains saying, “I understand you.”</p>
  <p>So next time you start a yawn chain, know you’re just showing empathy!</p>
  `
  },
  {
    title: "Laughter Really Is Medicine",
    category: "Comedy",
    body: `
  <p>Laughter reduces stress hormones, boosts your immune system, and releases endorphins — the brain’s feel-good chemicals.</p>
  <p>That’s why a night of comedy movies or sharing jokes with friends can leave you feeling refreshed, both mentally and physically.</p>
  `
  },
  {
    title: "Dreams Only Last Minutes",
    category: "Night Stories",
    body: `
  <p>Have you ever woken up feeling like you just lived through a whole movie in your dream? In reality, most dreams last only a few minutes.</p>
  <p>Your brain compresses time while dreaming, making experiences feel longer than they really are. No wonder dreams can feel so magical and strange.</p>
  `
  },
  {
    title: "Why Do Onions Make Us Cry?",
    category: "Medicine",
    body: `
  <p>When you cut into an onion, it releases a chemical called syn-Propanethial-S-oxide. This irritates your eyes, causing tears.</p>
  <p>A quick trick: chill your onions before cutting or slice them under running water. Less crying, more cooking!</p>
  `
  },
  {
    title: "Sharks Existed Before Trees",
    category: "Random",
    body: `
  <p>Sharks are older than trees! Sharks have been around for more than 400 million years, while trees appeared about 350 million years ago.</p>
  <p>That means sharks swam in the oceans long before forests ever existed on land.</p>
  `
  },
  {
    title: "Your Stomach Gets a New Lining Every 3 Days",
    category: "Medicine",
    body: `
  <p>Your stomach produces powerful acid to digest food — strong enough to dissolve metal! To protect itself, your stomach grows a new lining every 3–4 days.</p>
  <p>Without this renewal, your stomach would literally digest itself. Amazing, right?</p>
  `
  }
];

// Pick article based on current week of the year
function getCurrentWeek() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const days = Math.floor((now - start) / (24 * 60 * 60 * 1000));
  return Math.ceil((days + start.getDay() + 1) / 7);
}

function loadArticle() {
  const week = getCurrentWeek();
  const index = week % articles.length;
  const art = articles[index];

  const container = document.getElementById("article");
  container.innerHTML = `
    <h2>${art.title}</h2>
    <div class="meta">Category: ${art.category} • Week ${week}</div>
    ${art.body}
  `;

  // Load like count
  loadLike(index);
}

// Like button system
function formatLikes(num) {
  if (num >= 1000000) return (num/1000000).toFixed(1).replace(/\.0$/,'') + "M";
  if (num >= 1000) return (num/1000).toFixed(1).replace(/\.0$/,'') + "k";
  return num.toString();
}

function loadLike(index) {
  const likeBtn = document.getElementById("likeBtn");
  const likeCountEl = document.getElementById("likeCount");

  let storedLikes = localStorage.getItem("likes_article_" + index);
  let likes = storedLikes ? parseInt(storedLikes, 10) : 0;
  likeCountEl.textContent = formatLikes(likes);

  // Check if already liked
  let alreadyLiked = localStorage.getItem("liked_article_" + index) === "true";
  if (alreadyLiked) {
    likeBtn.classList.add("liked");
    likeBtn.setAttribute("disabled", "true");
  }

  likeBtn.onclick = () => {
    if (!alreadyLiked) {
      likes++;
      localStorage.setItem("likes_article_" + index, likes);
      likeCountEl.textContent = formatLikes(likes);
      likeBtn.classList.add("liked");
      likeBtn.setAttribute("disabled", "true");
      localStorage.setItem("liked_article_" + index, "true");
      alreadyLiked = true;
    }
  };
}

// Share link copy
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("share-link")) {
    e.preventDefault();
    navigator.clipboard.writeText(window.location.href);
    e.target.textContent = "Copied!";
    setTimeout(() => { e.target.textContent = "Copy link"; }, 2000);
  }
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Initialize
document.addEventListener("DOMContentLoaded", loadArticle);