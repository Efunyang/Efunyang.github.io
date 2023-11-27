const membersInfo = [
	['res/AboutUs/蘇克倫.png', '蘇克倫', '主負責人', '成功大學政治系'],
	['res/AboutUs/孫姊.png', '孫如廷', '營運負責人', '美國在臺協會實習'],
	['res/AboutUs/陳柏偉.png', '陳柏偉', '美術設計', '成功大學工設系'],
	['res/AboutUs/楊宜芳.png', '楊宜芳', '前端負責人', '成功大學資工系'],
	['res/AboutUs/Eason.png', '張羿軒', '後端負責人', '成功大學資工系'],
	['res/AboutUs/林姊.png', '林禹華', '財務負責人', '資誠會計事務所職員'],
]

const membersElement = document.getElementById('members');
for (let memberInfo of membersInfo) {
	const src = memberInfo[0];
	const name = memberInfo[1];
	const job = memberInfo[2];
	const description = memberInfo[3];
	membersElement.innerHTML += `
<div class="col-sm">
<div class="card h-100">
<div class="card-img">
<img src="${src}" class="placeholder-glow" alt="">
</div>
<div class="card-body">
<h4 class="card-title">${name}</h4>
<h5 class="card-subtitle mb-2">${job}</h5>
<p class="card-text">${description}</p>
</div>
</div>
</div>`;
}
