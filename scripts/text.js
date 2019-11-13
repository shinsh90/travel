const test_1 = document.querySelector(".test_1");
const dome = document.querySelector('.dome');
const oversea = document.querySelector('.oversea');
const oneway = document.querySelector('.oneway');
const roundtrip = document.querySelector('.roundtrip');
const onewayo = document.querySelector('.onewayo');
const roundtripo = document.querySelector('.roundtripo');


function domestiC() {
    oneway.style.background = "#2a2e30";
    oneway.style.color = "#fff";
    roundtrip.style.background = "#fff"; // 국내 항공
    roundtrip.style.color = "#2a2e30";

}

function overseaC() {

    onewayo.style.background = "#2a2e30";
    onewayo.style.color = "white";
    roundtripo.style.background = "white";
    roundtripo.style.color = "#2a2e30"; // 해외 항공
}

function onewayC() {
    oneway.style.background = "#2a2e30";
    oneway.style.color = "white";
    roundtrip.style.background = "white";
    roundtrip.style.color = "#2a2e30"; // 편도
}

function roundtripC() {
    oneway.style.background = "white";
    oneway.style.color = "#2a2e30";
    roundtrip.style.background = "#2a2e30";
    roundtrip.style.color = "white"; // 왕복
}

function onewayCC() {
    onewayo.style.background = "#2a2e30";
    onewayo.style.color = "white";
    roundtripo.style.background = "white";
    roundtripo.style.background = "#2a2e30"; // 편도
}

function roundtripCC() {
    onewayo.style.background = "white";
    onewayo.style.background = "#2a2e30";
    roundtripo.style.background = "#2a2e30";
    roundtripo.style.color = "white"; // 왕복
}

dome.addEventListener("click", domestiC);
oversea.addEventListener("click", overseaC);
oneway.addEventListener("click", onewayC);
roundtrip.addEventListener("click", roundtripC);
onewayo.addEventListener("click", onewayCC);
roundtripo.addEventListener("click", roundtripCC);