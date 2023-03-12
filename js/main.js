(function typea() {
  var i = 0;
  var ii = 0;
  var check = 0;
  var speed = 50;
  var q = '';
  var arr = ['Build',
    'Develop',
    'Promote',
    'Grow'];

  (function typeWriter() {
    var txt = arr[ii];
    if (i < txt.length && check < 1) {
      document.getElementById("atxt").innerHTML += txt.charAt(i);
      i++;
      if (i >= txt.length) {
        check = 1;
        setTimeout(typeWriter, 4000);
      } else {
        setTimeout(typeWriter, speed);
      }
    } else {
      if (check > 0) {
        q = document.querySelector('#atxt').innerHTML;
        i--;
        document.querySelector('#atxt').innerHTML = document.querySelector('#atxt').innerHTML.substr(0, i);
        if (q.length == 0) {
          check = 0;
          if (ii >= arr.length-1) {
            ii = 0;
          } else {
            ii++;
          }
          setTimeout(typeWriter, speed);
        } else {
          setTimeout(typeWriter, speed);
        }
      }
    }
  })();

})();

var qp = document.querySelector("body");

(function() {
  var a = JSON.parse('{"nav":[["Home","index.html"], ["Perks", "#k2"], ["Partners", "#partn"], ["Reviews", "#rev"], ["Contact", "#end"], ["About Us", "abt.html"]]}');

  var b = document.querySelector("#navc>div");
  for (var i = 0; i < a.nav.length; i++) {
    var c = document.createElement("a");
    c.href = a.nav[i][1];
    c.innerText = a.nav[i][0];
    c.style.transition = "transform 1s ease "+i/4+"s, color 2s ease 0s";
    c.onclick = function () {
      nav(this);
    }
    b.appendChild(c);
  }

  var ba = document.querySelector("#lnav>div:nth-child(2)");
  for (var j = 0; j < a.nav.length; j++) {
    var ca = document.createElement("a");
    ca.href = a.nav[j][1];
    ca.innerText = a.nav[j][0];
    ca.style.transition = "opacity .5s";
    ba.appendChild(ca);
  }
})();


function nav(a) {
  var b = document.querySelector("#nav>div:nth-child(2)");
  var d = document.querySelector("#navc");
  var e = document.querySelectorAll("#navc a");
  b.classList.toggle("nava");
  d.classList.toggle("navc");

  for (var i = 0; i < e.length; i++) {
    e[i].classList.toggle("anav");
  }
}


(function () {

  var inv = JSON.parse('{"inve":[["Organic Shillers","700+"],["Shill Contest Held", "70+"],["Satisfied Devs", "60+"],["Partners","10+"]]}');

  var a = document.querySelector("#inv");

  for (var i = 0; i < inv.inve.length; i++) {
    var ab = document.createElement("div");
    var b = document.createElement("div");
    b.innerText = "";
    b.classList.add("no"+i);
    ab.appendChild(b);
    var c = document.createElement("div");
    c.innerText = inv.inve[i][0];
    ab.appendChild(c);
    a.appendChild(ab);
  }

})();



(function() {
  var a = document.querySelector(".no0");
  var b = document.querySelector(".no1");
  var c = document.querySelector(".no2");
  var d = document.querySelector(".no3");

  var q = 0,
  r = 0,
  s = 0,
  t = 0;
  setInterval(function() {
    if (q < 701) {
      q += 15;
      a.innerText = q+"+";
    }
    if (r < 71) {
      r += 2;
      b.innerText = r+"+";
    }
    if (s < 61) {
      c.innerText = s+++"+";
    }
    if (t < 11) {
      d.innerText = t+++"+";
    }
  },
    100);
})();




(function () {
  var list = JSON.parse('{"lst":[["fas","coins","Organic Shilling","With a wider and active community, shilling has never been better."], ["fas", "user-secret", "Guerilla Marketing", "Guerilla marketing campaigns targets a large audience for products or services."], ["fas", "hashtag", "Media Marketing", "Media marketing proves effective especially the social media making brands trend through hashtags."], ["fas", "users", "Active Community", "The shilling team is always active and ready to promote brands both online and offline."], ["fas", "edit", "Content Writing", "Brands adverts are always consized, catchy and enticing."], ["fas", "star", "Brand Development", "With the help of our stats persons, brand can be help to developed at an outrageous pace."]]}');


  var aa = document.querySelector("#k2>div:nth-of-type(3)");

  for (var i = 0; i < list.lst.length; i++) {
    var a = document.createElement("div");
    a.setAttribute("id", "pks");
    a.classList.add("panim");

    var b = document.createElement("div");
    var c = document.createElement("i");
    c.classList.add(list.lst[i][0]);
    c.classList.add("fa-"+list.lst[i][1]);
    c.classList.add("fa-2x");
    b.appendChild(c);
    a.appendChild(b);

    var d = document.createElement("div");
    d.innerText = list.lst[i][2];
    a.appendChild(d);

    var e = document.createElement("div");
    e.innerText = list.lst[i][3];
    a.appendChild(e);

    aa.appendChild(a);
  }


  var t = document.querySelector("#arev>div");


})();



(function() {
  var stp = JSON.parse('{"a":[["Enter the Website","Enter the shill address in the browser address field."],["Contact","Select from an array of our socials to contact ."],["Message","You can send a message to begin or to ask for more info."],["Transacting","Our server is very quick in responding messages almost instantly and business request are carried out when requirements are met."]]}');


  var aa = document.querySelector("#k5>div:nth-child(2)");

  var v = 0;
  for (var i of stp.a) {
    v++;
    var a = document.createElement("div");
    a.setAttribute("id", "st");
    a.classList.add("st");
    a.style.opacity = "0";

    var b = document.createElement("div");
    b.innerText = v;
    a.appendChild(b);

    var c = document.createElement("div");
    c.innerText = i[0];
    a.appendChild(c);

    var d = document.createElement("div");
    var da = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    da.setAttribute("height", "50");
    da.setAttribute("width", "50");
    var db = document.createElementNS("http://www.w3.org/2000/svg", "path");
    db.classList.add("ln");
    db.setAttribute("stroke", "white");
    db.setAttribute("d", "M25 0 L25 50");
    da.appendChild(db);
    d.appendChild(da);
    a.appendChild(d);

    var e = document.createElement("div");
    e.innerText = i[1];
    a.appendChild(e);

    aa.appendChild(a);
  }

})();



function ant(a) {
  var aa = document.querySelector(a);
  if (Math.round(aa.getBoundingClientRect().top) <= 700) {
    return a;
  } else {
    return false;
  }
}

function antt(a) {
  var aa = document.querySelectorAll(a);
  if (Math.round(aa[0].getBoundingClientRect().top) <= 700) {
    return a;
  } else {
    return false;
  }
}


(function() {
  var ar = ["#k2", "#p1", "#p3", "#p4", "#nav"];

  qp.addEventListener("scroll", animat);
  window.addEventListener("load", animat);

  function animat() {

    for (var i of ar) {
      if (ant(i) != false) {

        switch (ant(i)) {

          case "#k2":
            setTimeout(()=> {

              var ab = document.querySelectorAll(".panim");
              for (var j = 0; j < ab.length; j++) {
                ab[j].style.transform = 'rotateX(0deg)';
              }
            },
              50);
            delete ar[i];
            break;


          case "#p1":
            var a = document.querySelector("#p1");
            var c = document.querySelector("#inv");
            var b = document.querySelector("#p1>div>div:nth-of-type(2)");
            setTimeout(()=> {
              a.style.transform = 'translateX(0)';
            },
              100);
            setTimeout(()=> {
              c.style.transform = 'translateX(0)';
            },
              100);
            setTimeout(()=> {
              b.style.transform = 'translateY(0)';
              b.style.opacity = '1';
            },
              1000);
            delete ar[i];
            break;


          case "#p3":
            setTimeout(()=> {
              var a = document.querySelector("#p3");
              var b = document.querySelector("#p4");
              a.style.transform = 'translateX(0)';
              b.style.transform = 'translateX(0)';
            },
              0);
            delete ar[i];
            break;


        }

      }
    }
  }

})();


(function() {
  var a = document.querySelector("#nav");
  var b = document.querySelector("#lnav");

  qp.addEventListener("scroll",
    function() {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        a.style.backgroundColor = "#a87825";
        b.style.backgroundColor = "#a87825";
      } else {
        a.style.backgroundColor = "transparent";
        b.style.backgroundColor = "transparent";
      }
    });
})();



(function() {
  var ar = ["#st .ln"];

  qp.addEventListener("scroll",
    animt);
  window.addEventListener("load",
    animt);

  function animt() {

    for (var i of ar) {
      if (antt(i) != false) {

        switch (antt(i)) {

          case "#st .ln":
            var k = document.querySelectorAll('#st .ln');
            var l = document.querySelectorAll('.st');
            for (var j = 0; j < k.length; j++) {
              k[j].style.animation = 'line 0.5s linear '+j+'s forwards';
              l[j].style.animation = 'dis 1s linear '+j+'.0s forwards';
            }
            k[k.length-1].style.display = 'none';
            break;

        }

      }
    }

  }

})();



(function () {

  var tes = JSON.parse('{"ti":[["Lionel Messi", "Yiu really did an amazing job in bringing my brand to limelight. Looking forward to working again with you."], ["Cristiano Ronaldo", "Yiu really did an amazing job in bringing my brand to limelight. Looking forward to working again with you."], ["Neymar jr", "Yiu really did an amazing job in bringing my brand to limelight. Looking forward to working again with you."], ["Lionel Messi", "Yiu really did an amazing job in bringing my brand to limelight. Looking forward to working again with you."], ["Cristiano Ronaldo", "Yiu really did an amazing job in bringing my brand to limelight. Looking forward to working again with you."], ["Neymar jr", "Yiu really did an amazing job in bringing my brand to limelight. Looking forward to working again with you."], ["Lionel Messi", "Yiu really did an amazing job in bringing my brand to limelight. Looking forward to working again with you."], ["Cristiano Ronaldo", "Yiu really did an amazing job in bringing my brand to limelight. Looking forward to working again with you."], ["Neymar jr", "Yiu really did an amazing job in bringing my brand to limelight. Looking forward to working again with you."]]}');


  var a = document.querySelector("#arev>div");

  for (var i = 0; i < tes.ti.length; i++) {
    var b = document.createElement("div");

    var c = document.createElement("div");
    var d = document.createElement("i");
    d.classList.add("fas");
    d.classList.add("fa-user");
    c.appendChild(d);
    b.appendChild(c);

    var e = document.createElement("div");
    var f = document.createElement("div");
    f.innerText = tes.ti[i][0];
    e.appendChild(f);

    var g = document.createElement("div");
    g.innerText = tes.ti[i][1];
    e.appendChild(g);
    b.appendChild(e);

    a.appendChild(b);
  }

  var k = document.querySelectorAll("#arev>div>div");

  a.style.animation = "car "+Math.pow(k.length, 2)+"s linear 0s infinite";

  var deg = 360/k.length;
  //var cellh = k[0].clientHeight;
  var cellh = 200;


  var rad = Math.round(cellh/2)/Math.tan(Math.PI/k.length);

  var fdg = 0;
  for (var h = 0; h < k.length; h++) {
    fdg += deg;
    k[h].style.transform = "rotateX("+fdg+"deg) translateZ("+rad+"px)";
  }

})();


(function() {

  var fq = JSON.parse('{"fq":[["What is Acemill?","Acemill is a digital platform for investing and mining Funds and Tokens through access to various financial products while maintaining a safe and secure environ."], ["What platforms are supported?","Web."], ["How do i begin?","Registering with ace inc involves user\'s mobile number and valid email address. You will also need to upload your KYC documents after registration. The documents includes :<ol><li>Passport photograph</li><li>BVN</li><li>Valid ID Card - International Passport, Driver\'s license, Voter\'s card or National ID Card</li></ol>"], ["How do i fund my Wallet?","You can top-up your wallet by:<ul><li>Via paystack gateway</li><li>Via dtranzact</li><li>Via direct transfer into the Ace inc account 0819497682 with Sterling Bank and your account will be funded same day</li></ul>"], ["How do i invest?","Select one or more options from the array of products, enter amount you wish to invest, confirm transaction and make payment."], ["How do i withdraw funds?","Your KYC documents  and account must be updated verified to make a successful withdrawal. Provide bank account details, enter amount to be withdrawn, confirm transaction by entering withdrawal pin."], ["How to make 3rd party transfers?","You can transfer funds from wallet to another user wallet. In addition to sharing, ace tokens can also be shared from one bin to another."], ["How do i convert ace tokens to money?","Ace token value are determined based on the market value. At any point in which you want to convert token to funds, simply click on Market and either sell to Ace inc which is faster or search for a potential buyer."]]}');

  var a = document.querySelector("#k6>div:nth-child(2)");

  for (var i = 0; i < fq.fq.length; i++) {
    var b = document.createElement("div");
    b.classList.add("lii");

    var c = document.createElement("div");
    c.classList.add("li");
    c.innerText = fq.fq[i][0];
    b.appendChild(c);

    var d = document.createElement("div");
    d.innerHTML = fq.fq[i][1];
    b.appendChild(d);

    a.appendChild(b);
  }



  var g = document.querySelectorAll('.li');
  var gg = document.querySelectorAll('.lii');

  for (var i = 0; i < g.length; i++) {
    g[i].addEventListener('click', function() {
      this.classList.toggle('active');
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }



})();


(function() {
  var a = document.querySelectorAll("#k6 .lii");

  qp.addEventListener("scroll",
    function() {
      for (var i = 0; i < a.length; i++) {
        if (Math.round(a[i].getBoundingClientRect().top) <= 1000) {
          a[i].style.transform = "translateY(0px)";
          a[i].style.opacity = "1";
        }
      }
    });
})();