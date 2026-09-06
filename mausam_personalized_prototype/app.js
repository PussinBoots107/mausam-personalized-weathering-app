const profiles={
health:{title:"Health Snapshot",cards:[["🌫️ AQI","142","Unhealthy for sensitive groups","aqi.html","risk"],["🌿 Pollen","HIGH","Elevated allergy risk","pollen.html","risk"],["☀️ UV Index","8","High · peak at 12:30 PM","uv.html","risk"],["💧 Humidity","72%","High humidity","", "blue"]],recommendation:"Outdoor conditions are moderate-risk today. If you are sensitive to air pollution or pollen, consider outdoor activities before 9 AM."},
fitness:{title:"Fitness Snapshot",cards:[["🏃 Fitness Score","82/100","Good conditions","fitness.html","good"],["⏱️ Best Run","6–8 AM","Cool + low UV + light wind","fitness.html","good"],["☀️ UV Index","8","Avoid prolonged midday exposure","uv.html","risk"],["💨 Wind","14 km/h","Light to moderate","", "blue"]],recommendation:"Best running window: 6–8 AM. Conditions become less comfortable around midday as temperature and UV rise."},
travel:{title:"Travel Snapshot",cards:[["✈️ Mumbai","31°","Rain probability 60%","travel.html","blue"],["🌧️ London","16°","Rain likely tomorrow","travel.html","risk"],["🎒 Packing","Raincoat","London needs rain protection","travel.html","good"],["⚠️ Alert","1 active","Thunderstorm near Mumbai","alerts.html","risk"]],recommendation:"Your saved destinations have mixed conditions. London needs rain protection, while thunderstorms may affect Mumbai after 6 PM."},
family:{title:"Family Snapshot",cards:[["🏫 School Commute","Good","7:30 AM · 24°","", "good"],["🌧️ Rain Alert","25%","Higher after 4 PM","forecast.html","blue"],["👁️ Visibility","6.2 km","Good visibility","", "good"],["⛈️ Warning","4 PM","Thunderstorm advisory","alerts.html","risk"]],recommendation:"Morning school commute conditions look good. Keep an eye on the thunderstorm advisory for the afternoon."},
agriculture:{title:"Agriculture Snapshot",cards:[["🌧️ Rainfall","18 mm","Expected tomorrow","forecast.html","blue"],["🌱 Soil Moisture","64%","Good moisture","", "good"],["💨 Wind","14 km/h","Suitable conditions","", "blue"],["🌡️ Heat Risk","Moderate","Monitor afternoon heat","", "risk"]],recommendation:"Rain is expected tomorrow, so irrigation may not be necessary. Monitor afternoon heat and wind conditions."},
commute:{title:"Commute Snapshot",cards:[["👁️ Visibility","6.2 km","Good travel conditions","", "good"],["🌧️ Rain","25%","Higher after 4 PM","forecast.html","blue"],["🌫️ Fog","Low","No major fog expected","", "good"],["⛈️ Storm","4–7 PM","Possible thunderstorms","alerts.html","risk"]],recommendation:"Morning travel conditions are favorable. Afternoon thunderstorms may affect the evening commute."},
beach:{title:"Beach Snapshot",cards:[["🌊 Waves","1.2 m","Moderate surf","", "blue"],["🌊 Tide","2:40 PM","High tide","", "blue"],["🏊 Water","28°","Comfortable","", "good"],["☀️ UV","8","High exposure risk","uv.html","risk"]],recommendation:"Beach conditions are moderate. Check tide timing and protect yourself from high UV exposure around midday."},
events:{title:"Event Snapshot",cards:[["🎉 Comfort","78/100","Comfortable conditions","", "good"],["🌧️ Rain Risk","32%","6–8 PM","forecast.html","blue"],["💨 Wind","14 km/h","Moderate","", "blue"],["💧 Humidity","72%","Some discomfort","", "risk"]],recommendation:"Outdoor event conditions look generally comfortable, but keep a rain contingency for 6–8 PM."}
};
function openPage(p){location.href=p}
function renderProfile(profile){
 const data=profiles[profile]||profiles.health;
 document.getElementById("profileTitle").textContent=data.title;
 document.getElementById("dashboardGrid").innerHTML=data.cards.map(c=>`<button class="metric-card ${c[4]}" onclick="${c[3]?`openPage('${c[3]}')`:''}"><span>${c[0]}</span><strong>${c[1]}</strong><small>${c[2]}</small></button>`).join("");
 document.getElementById("recommendation").innerHTML=`<span class="eyebrow">ACTIONABLE INSIGHT</span><h3>What this means for you</h3><p>${data.recommendation}</p>`;
 document.querySelectorAll(".life-chip").forEach(b=>b.classList.toggle("active",b.dataset.profile===profile));
 localStorage.setItem("activeMausamProfile",profile);
}
document.addEventListener("DOMContentLoaded",()=>{
 const row=document.getElementById("lifestyleRow"); if(!row)return;
 const saved=localStorage.getItem("activeMausamProfile")||"health";
 renderProfile(saved);
 row.addEventListener("click",e=>{const btn=e.target.closest(".life-chip");if(btn)renderProfile(btn.dataset.profile)});
});