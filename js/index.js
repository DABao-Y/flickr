const url ='https://script.google.com/macros/s/AKfycbyAdQ9c8vbq4W2amts6CfrIc_bz49QOULzWICPUibuRlOfSMvxG67uYE5ZZQOY8AjmJ/exec';
const imgstr ='https://images.pexels.com/photos/ID_HERE/pexels-photo-ID_HERE.jpeg';
let url2 = document.location.toString();
console.log(url2);
let ary = url2.split('?');
console.log(ary);
let sid = ary[1];


$(document).ready(function(){
    getData();
});


function getData(){
    let parameter = {};
    parameter.method = 'getFakeAPI';
    parameter.uid = '110819038';
    parameter.token = 'pUUDeXhHjtqBaB';
    parameter.id = sid;
    $.post(`${url}`, parameter, function(d) {
        console.log(d);
            let name= d.data.name;
            let imgurl=d.data.imgurl;
            let author = d.data.author;
            let info= d.data.info;
            let photoNum = d.data.photoNum;
            let videoNum = d.data.videoNum;
            let viewNum = d.data.viewNum;
            let authorImg = d.data.authorImg;
            let content =t02(name, info, photoNum, videoNum, viewNum, imgurl, author, authorImg);
            $('.imgh').append(content)
    }).fail(function(dd){
        console.log("fail");
    })
}
function t02(name, info, photoNum, videoNum, viewNum, imgurl, author, authorImg){
    let html =`
    <div class="box1 hz-200 position-relative "> 
    <img class="object-fit-cover mt-1 position-absolute w-100 h-100" src="${imgurl}" alt=""> 
    <div class="w-100 h-100 position-absolute">
        <div class="album h-100">
            <span class="position-absolute title d-flex justify-content-end p-3">
                <div class="fz-16 text-light">${name}</div>
                <div class="fz-14 text-light">${photoNum} 張相片 · ${viewNum} 次檢視</div>
            </span>
            <span class='bottom title p-3 w-100 d-flex justify-content-end'>
                <i class="fa fa-share-square-o text-light fa-lg mr-4" aria-hidden="true"></i>
                <i class="fa fa-download text-light fa-lg" aria-hidden="true"></i>
            </span>
        </div> 
    </div>               
</div>
`;
return html;
}