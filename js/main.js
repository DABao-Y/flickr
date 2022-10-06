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
            let imgurl = imgstr.replace(/ID_HERE/g, d.data.imgurl);
            let name= d.data.name;
            let author = d.data.author;
            let info= d.data.info;
            let photoNum = d.data.photoNum;
            let videoNum = d.data.videoNum;
            let viewNum = d.data.viewNum;
            let authorImg = d.data.authorImg;
            let content =t02(name, info, photoNum, videoNum, viewNum, imgurl, author, authorImg);
            $('.imgh').append(content)
        for(let i=0; i<d.data.images.length; i++){
            let imgurl = imgstr.replace(/ID_HERE/g, d.data.images[i].imgurl);
            let author = d.data.author;
            let id= d.data.images[i].ID;
            let commentNum= d.data.images[i].commentNum;
            // let imgurl= d.data.images[i].imgurl;
            let likeNum= d.data.images[i].likeNum;
            let title = d.data.images[i].title;
            let content = t01(id, commentNum, imgurl, likeNum, title, author);
            $('.img').append(content);
        }
    }).fail(function(dd){
        console.log("fail");
    })
}
function t02(name, info, photoNum, videoNum, viewNum, imgurl, author, authorImg){
    let html =`
                 <div class="d-flex justify-content-center ">
                        <img class="w-100 h-100 position-absolute object-fit-cover" src="${imgurl}" alt="">
                        <div class="w-100 h-100 position-absolute bg-my3"></div>
                        <div class="p-5 w-100 h-100 d-flex  position-absolute justify-content-center">
                            <div class="p d-flex justify-content-center flex-column">
                                <div class="text-light fz-36 text-center p-3 ">${name}</div>
                                <div class="text-light fz-24 text-center p-1">${info}</div>
                                <div class="text-light fz-14 text-center p-1">${photoNum}張相片・${viewNum} 次檢視</div>
                                <a class="text-center pt-2" href=""><i class="fa fa-share text-light fz-18" aria-hidden="true"></i></a>
                                <div class="text-light fz-14 text-center p-5">相片擁有者：${author}</div>
                            </div>
                        </div>   
                    </div>
           
`;
return html;
}
function t01(id, commentNum, imgurl, likeNum, title, author){
    let html =`
    <div class="col-6 hz-400 p-1">
        <div class="h-100 w-100 position-relative">
            <img class="h-100 w-100 object-fit-cover position-absolute" src="${imgurl}" alt="">
            <div class="h-100 w-100 imgh position-absolute">
                <div class="bhover w-100 h-100 d-flex align-items-end p-2 justify-content-between">
                    <div class="info">
                        <div class="w-100 h-100 fz-12 text-light d-flex align-items-end pl-1">${title}</div>
                        <div class="author w-100 h-100 fz-12 d-flex align-items-end pl-1" >相片擁有者 ${author}</div>
                    </div>
                    <div class="share d-flex">
                        <i class="fa fa-star-o text-light p-1 fz-18" aria-hidden="true"></i>
                        <div class="w-100 fz-12 text-light pt-1">${likeNum}</div> 
                        <i class="fa fa-comment-o text-light p-1 fz-18 ml-3" aria-hidden="true"></i>
                        <div class="w-100 fz-12 text-light pt-1">${commentNum}</div>
                        <i class="fa fa-plus-square-o text-light p-1 fz-18 ml-3" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
        return html;
} 