const scrollLeft = document.querySelector(".scroll-left");
const scrollRight = document.querySelector(".scroll-right");
const heroDiv = document.querySelector(".hero-img");
const sectionContainer = document.querySelector("section");
const bodyContainer = document.querySelector("body");
const emblemDiv = document.querySelector(".emblem");
const albumTitleSpan = document.querySelector(".album-title");
const texts = document.querySelectorAll(".text");
const albumNum = document.querySelector(".album-num");
const spotifyWidget = document.querySelector(".spotify-widget iframe");
const albums = [
	{//1
		album: "",
		emblem: "life is better with krishna",
		"bg-color": ["#FF9933", "#0D1827"],
		"accent-color": "#FF9933",
		url:
			"./img/krsn.png",
		spotify:
		"https://open.spotify.com/embed/track/0Y3fMGHRPm2rtrEpemCwdg?si=43aa9c8853c24842"

	},
	{//2
		album: "",
		emblem: "Life is better with music",
		"bg-color": ["#FF9933", "#0D1827"],
		"accent-color": "#FF9933",
		url:
			"./img/krsn.png",
		spotify:
			"https://open.spotify.com/embed/track/7e7lRysVNPg8T9q30wjfkR?si=bc018447c8184d74"
	},
	{//3
		album: "",
		emblem: "Life is better with music",
		"bg-color": ["#FF9933", "#0D1827"],
		"accent-color": "#FF9933",
		url:
			"./img/krsn.png",
		spotify:
"https://open.spotify.com/embed/track/0AfYghWHxnG8AKhyila5Kt?si=c87b078a8a05437b"
	},
	
	{//4
		album: "",
		emblem: "Life is better with music",
		"bg-color": ["#FF9933", "#0D1827"],
		"accent-color": "#FF9933",
		url:
			"./img/krsn.png",
		spotify:
			"https://open.spotify.com/embed/track/7jrYiQ5lB7BmCjZ9IaMyPx?si=847e7eac18814ad7"
	},
	{//5
		album: "",
		emblem: "Life is better with music",
		"bg-color": ["#FF9933", "#0D1827"],
		"accent-color": "#FF9933",
		url:
			"./img/krsn.png",
		spotify:
			"https://open.spotify.com/embed/track/3XVQi9DiFO1kG2aRrCV84t?si=f92ac2d156ce41ac"
	},
	{//6
		album: "",
		emblem: "Life is better with music",
		"bg-color": ["#FF9933", "#0D1827"],
		"accent-color": "#FF9933",
		url:
			"./img/krsn.png",
		spotify:
			"https://open.spotify.com/embed/track/0E7Yq8mNELAoo2hudhXLWE?si=8e6665332f0441a3"
	},
	{//7
		album: "",
		emblem: "Life is better with music",
		"bg-color": ["#FF9933", "#0D1827"],
		"accent-color": "#FF9933",
		url:
			"./img/krsn.png",
		spotify:
			"https://open.spotify.com/embed/track/1oen6i1N0FWIo1Fk2STtrL?si=5d839c01f0954269"
	},
	{//8
		album: "",
		emblem: "Life is better with music",
		"bg-color": ["#FF9933", "#0D1827"],
		"accent-color": "#FF9933",
		url:
			"./img/krsn.png",
		spotify:
			"https://open.spotify.com/embed/track/2BO19n8QKUqHpcWGwSFPOx?si=c23d52a250d041a0"
	},
	{//9
		album: "",
		emblem: "Life is better with music",
		"bg-color": ["#FF9933", "#0D1827"],
		"accent-color": "#FF9933",
		url:
			"./img/krsn.png",
		spotify:
			"https://open.spotify.com/embed/track/0PfGeZQoAHW7sal1Ub5inQ?si=c21296a25460428e"
	},
	{//10
		album: "",
		emblem: "Life is better with music",
		"bg-color": ["#FF9933", "#0D1827"],
		"accent-color": "#FF9933",
		url:
			"./img/krsn.png",
		spotify:
			"https://open.spotify.com/embed/track/1yWbIfU6mZXFJhQOfATCaP?si=3c27beb1024a43f0"
	},
	{//11
		album: "",
		emblem: "Life is better with music",
		"bg-color": ["#FF9933", "#0D1827"],
		"accent-color": "#FF9933",
		url:
			"./img/krsn.png",
		spotify:
			"https://open.spotify.com/embed/track/3QV58WfM1gZh78s0KatqhK?si=45b5bf861d394d3f"
	},
	{//12
		album: "",
		emblem: "Life is better with music",
		"bg-color": ["#FF9933", "#0D1827"],
		"accent-color": "#FF9933",
		url:
			"./img/krsn.png",
		spotify:
			"https://open.spotify.com/embed/track/70PciQYtcwNes4BsJQdDyM?si=77385177173a42a6"
	},
	
	{//13
		album: "",
		emblem: "Life is better with music",
		"bg-color": ["#FF9933", "#0D1827"],
		"accent-color": "#FF9933",
		url:
			"./img/krsn.png",
		spotify:
			"https://open.spotify.com/embed/track/6U6ePf3cBBGBq8c3eWf29d?si=f94423df5b5340f4"
	},
	{//14
		album: "",
		emblem: "Life is better with music",
		"bg-color": ["#FF9933", "#0D1827"],
		"accent-color": "#FF9933",
		url:
			"./img/krsn.png",
		spotify:
			"https://open.spotify.com/embed/track/7vzEqxpSg5La3BNszOzCCP?si=b95a1e4bc0464858"
	},
	{//15
		album: "",
		emblem: "Life is better with music",
		"bg-color": ["#FF9933", "#0D1827"],
		"accent-color": "#FF9933",
		url:
			"./img/krsn.png",
		spotify:
			"https://open.spotify.com/embed/track/7MDmc1bpWbeTJGrHgnr8aO?si=c7aaeabca200496b"
	},
	{//16
		album: "",
		emblem: "Life is better with music",
		"bg-color": ["#FF9933", "#0D1827"],
		"accent-color": "#FF9933",
		url:
			"./img/krsn.png",
		spotify:
			"https://open.spotify.com/embed/track/7xdtHg43Zjy4WREw5wE7Xf?si=20b28a74d8ea4b85"
	},
	{//17
		album: "",
		emblem: "Life is better with music",
		"bg-color": ["#FF9933", "#0D1827"],
		"accent-color": "#FF9933",
		url:
			"./img/krsn.png",
		spotify:
			"https://open.spotify.com/embed/track/6FZpj1GlWvQjECFz5oE4hC?si=019a0fb79b6f44f9"
	},
	{//18
		album: "",
		emblem: "Life is better with music",
		"bg-color": ["#FF9933", "#0D1827"],
		"accent-color": "#FF9933",
		url:
			"./img/krsn.png",
		spotify:
			"https://open.spotify.com/embed/track/1iaSoNZvMX6oM2XtBmL4gB?si=2223d655296c4827"
	},
];

scrollLeft.addEventListener("click", () => handleClickScroll(-1));
scrollRight.addEventListener("click", () => handleClickScroll(1));
heroDiv.addEventListener("animationend", () => {
	heroDiv.classList.remove("album-transition");
	document.addEventListener("keydown", handleKeyScroll);
	scrollLeft.disabled = false;
	scrollRight.disabled = false;
	scrollLeft.classList.remove("key-press-hover-left");
	scrollRight.classList.remove("key-press-hover-right");

	for (const text of texts) text.classList.add("show-texts");
});

const handleClickScroll = (val) => {
	if (index + val >= 0 && index + val < albums.length) {
		updateDisplay((index += val));
	}
};

const handleKeyScroll = (e) => {
	if (e.key == "ArrowLeft") {
		scrollLeft.classList.add("key-press-hover-left");
		handleClickScroll(-1);
	}
	if (e.key == "ArrowRight") {
		scrollRight.classList.add("key-press-hover-right");
		handleClickScroll(1);
	}
};
let index = 0;

const updateDisplay = (index) => {
	let DELIMITER = "";

	const album = albums[index];

	for (const text of texts) text.classList.remove("show-texts");
	emblemDiv.innerHTML = "";
	scrollLeft.disabled = true;
	scrollRight.disabled = true;
	document.removeEventListener("keydown", handleKeyScroll);

	sectionContainer.id = `hero-${album.album.toLowerCase().replace(" ", "-")}`;
	bodyContainer.style.background = `linear-gradient(180deg, ${album["bg-color"][0]} 0%, ${album["bg-color"][1]} 100%)`;
	heroDiv.style.backgroundImage = `url(${album.url})`;
	albumTitleSpan.textContent = album.album;
	spotifyWidget.src = album.spotify;

	const number = index + 1;
	albumNum.innerText = number >= 10 ? number + "." : `0${number}.`;
	albumNum.style.color = album["accent-color"];

	if (index === 29) scrollRight.classList.add("hide-arrow");
	else scrollRight.classList.remove("hide-arrow");

	createEmblem(album.emblem, DELIMITER[0] || undefined).forEach((node) =>
		emblemDiv.append(node)
	);

	heroDiv.classList.add("album-transition");
};

const createEmblem = (string, delimiter = "•") => {
	const spans = [];

	string = string.trim().replaceAll(" ", delimiter) + delimiter;
	const numChars = string.length;
	const degVal = 90 / (numChars / 4);

	string.split("").forEach((char, idx) => {
		const span = document.createElement("span");
		span.innerText = char;
		span.style.transform = `rotate(${180 - degVal * idx}deg)`;
		if (char === delimiter) span.style.color = albums[index]["accent-color"];
		spans.push(span);
	});

	return spans;
};

updateDisplay(index);
