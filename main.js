// function save() {
//     window.open(canvas.toDataURL('image/png'));
//     var gh = canvas.toDataURL('png');

//     var a  = document.createElement('a');
//     a.href = gh;
//     a.download = 'image.png';

//     a.click()
// }

// function save() {
//     /*     var gh = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADNQTFRFAAAAPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09EvTTBAAAABB0Uk5TAA8fLz9PX29/j5+vv8/f7/rfIY4AAARsSURBVHja7VvZkusqDAyrAQvQ/3/teZjExrHDZoGrbl0/z0RtLY1oya/X/8+Nh/NHzYuAGPRz9llERET1GACJiIgYngaAkmvNnwTgERHtgwDefngawDofgDkAwPlp4I4AzHQA/gggstk0jF/P7ELQ3wBQPBoBRPRzTyI8P/bBGvh79FMstFXCvDSAt0kHzyBYNv7jj/iAx48DEiwzEfj0AFi/EEw4F+2B/5mfXQsbB4ZDQOKGwM2ioE+4hUdEm3jCjzybRbw4gIXkrxfbySnqCfYhS48rG23fs/wRGYdcGIQv1PsOcIgTkp//xTcs4WbyTEjs67pmFfh8+3+X1s0Jy3z7rxezaZ9EdTjI2MC1MpA37LqN65kjdoJuPmtUUpC40NmvLy2WntM3OcH09RupE8KdMLjefufgBE1gvz2blnj/2pDY7wikSPold9M+dCVSWpDuln1HUMLuCfsHEndP2H+9uO+kJEfVaicNq+zin9udxY6gQcrRlFeNHUG1oCfpjpIjAtmaukQXHRabpJwdMNlFSzZFdL3Dv4WkrlH4lyH6Y6jOgj0BSPUGWV0InrQAztISr2UgahFe1r3XJgHRC9C+qhK3CqC/4H6Sm1XV64ApCKt5NegOgFTGGGPMIlnhx22NA64zhUsppTxVMtcuvY5hcCqX31DhgAu+EgZ+WLjSjoPJvF6mBH5lIFvC7wHBJ7kAAAByjFdkAvdDg0o7/PPByiOCSSIvbfhBo6HExvES/ftwjOs7v7iyoZCl0qhMhHWpDQoX9QvH/xJd+osriAbr9ZktEQONCm3yAD5EEU833YWIlgsA1PD5UwGAGz4DLAAIw0eAeQBs/CTaZi2o8VNYyAIwP2qAHsCSZYGR6xD5xtgPTwGeBzB+I0Xlj+Oajo2kCEK+GRqfg2sWwEAaKhCNLDdsRCkgnwLg8kEeDyDmLQwHoAp3w+EA1kJPPBoAL6lEYnAZmuLtfCwRbToZLwEYNP7X5Vs33NEFuI15BS6U7+auuydmGkoKXI1Kt9RlIZPHIIllLbfzWwboCm2AF480b7WUQkipDWySkhPlg7ggU9apWPFqkWzV2TZC1Am1a1UMltMWW8F6Xve4qpRCX86U3ZQkcEtFF79UKtW8RSJnsvr+IDK7N23HRScH+mrtWQ/RCF3D+DYOaM337bOKftvQ78iKps3fjbDIrkeX22cVLqAKAovVFfD1DzRi/V4AgbWmDMW8ivmO7Qto9FlV/FvGr5xsZilj3/hXI00UTPcKi6PYgkrXR5qnb/72ZuRho03fSF5E1xOGg7qvb5VPz2akTmcbnT48LExDCysycxitdGfRcWUbar2gvj59cDfqyH3NoMpNyt+k5r77t1B+tb/eZNzJtTt1y+4umXM49b9g1AmFUPvloDdzqsppDweA/RuSOoDLv6D7GvRAKPUP5ceo3DWbX4nFXm5iy8ubEfqCWiut22HDDqZcyBuP6zL6s0euLVzbBqunfWbFpTZmhfdjjVFy9seO/6nnH0Mpp/3TjvofAAAAAElFTkSuQmCC" */
    
//         var a  = document.createElement('a');
//         a.href = gh;
//         a.download = 'image.png';
    
//         a.click()
        
//     }

let btnDownload = document.querySelector('button');
let img = document.querySelector('img');
// Must use FileSaver.js 2.0.2 because 2.0.3 has issues.
btnDownload.addEventListener('click', () => {
    let imagePath = img.getAttribute('src');
    let fileName = getFileName(imagePath);
    saveAs(imagePath, fileName);
});
function getFileName(str) {
    return str.substring(str.lastIndexOf('/') + 1)
}



// function check() {


//    var question1 = document.quiz.question1.value;
//    var question2 = document.quiz2.question2.value;
//    var correct = 0;
   
// //    if (question1 == "ED959C") {
// //     correct++;
// //    }

// if (question1 == "\uD55C\uAD6D") { //unicode = 한국
//     correct++;
// }
// if (question2 == "\uC11C\uC6B8") { //unicode = 서울
//     correct++;

// }
//    document.getElementById("after_submit").style.visibility = "visible";
//    document.getElementById("number_correct").innerHTML = "you got " + correct + " correct";
// }