'use strict'
const s_switcher = document.querySelector('.s_btn');
const a_switcher = document.querySelector('.a_btn');
const l_switcher = document.querySelector('.l_btn');
const r_switcher = document.querySelector('.r_btn');
const as_switcher = document.querySelector('.as_btn');
const c_switcher = document.querySelector('.c_btn');
const b_switcher = document.querySelector('.b_btn');

var s = document.getElementById('saber_text');
var l = document.getElementById('lancer_text');
var a = document.getElementById('archer_text');
var r = document.getElementById('rider_text');
var as = document.getElementById('assassin_text');
var c = document.getElementById('caster_text');
var b = document.getElementById('berserker_text');
var sc = document.getElementById('sabercard');
var lc = document.getElementById('lancercard');
var ac = document.getElementById('archercard');
var rc = document.getElementById('ridercard');
var asc = document.getElementById('assassincard');
var cc = document.getElementById('castercard');
var bc = document.getElementById('berserkercard');


s_switcher.addEventListener('mouseover', function() {
    s.style.display= 'block'  
    l.style.display= 'none'
    a.style.display= 'none'
    r.style.display= 'none'
    as.style.display= 'none'
    c.style.display= 'none'
    b.style.display= 'none'
    sc.style.display= 'block'
    ac.style.display= 'none'
    lc.style.display= 'none'
    rc.style.display= 'none'
    asc.style.display= 'none'
    cc.style.display= 'none'
    bc.style.display = 'none'});

l_switcher.addEventListener('mouseover', function() {    

    s.style.display= 'none'  
    l.style.display= 'block'
    a.style.display= 'none'
    r.style.display= 'none'
    as.style.display= 'none'
    c.style.display= 'none'
    b.style.display= 'none'
    sc.style.display= 'none'
    ac.style.display= 'none'
    lc.style.display= 'block'
    rc.style.display= 'none'
    asc.style.display= 'none'
    cc.style.display= 'none'
    bc.style.display = 'none'});


a_switcher.addEventListener('mouseover', function() {    
   
    s.style.display= 'none'  
    l.style.display= 'none'
    a.style.display= 'block'
    r.style.display= 'none'
    as.style.display= 'none'
    c.style.display= 'none'
    b.style.display= 'none'
    sc.style.display= 'none'
    ac.style.display= 'block'
    lc.style.display= 'none'
    rc.style.display= 'none'
    asc.style.display= 'none'
    cc.style.display= 'none'
    bc.style.display = 'none'
  });

  r_switcher.addEventListener('mouseover', function() {    
    
    s.style.display= 'none'  
    l.style.display= 'none'
    a.style.display= 'none'
    r.style.display= 'block'
    as.style.display= 'none'
    c.style.display= 'none'
    b.style.display= 'none'
    sc.style.display= 'none'
    ac.style.display= 'none'
    lc.style.display= 'none'
    rc.style.display= 'block'
    asc.style.display= 'none'
    cc.style.display= 'none'
    bc.style.display = 'none'
  });

  as_switcher.addEventListener('mouseover', function() {    
    
    s.style.display= 'none'  
    l.style.display= 'none'
    a.style.display= 'none'
    r.style.display= 'none'
    as.style.display= 'block'
    c.style.display= 'none'
    b.style.display= 'none'
    sc.style.display= 'none'
    ac.style.display= 'none'
    lc.style.display= 'none'
    rc.style.display= 'none'
    cc.style.display= 'none'
    bc.style.display = 'none'
    asc.style.display= 'block'
  });

  c_switcher.addEventListener('mouseover', function() {    
   
    s.style.display= 'none'  
    l.style.display= 'none'
    a.style.display= 'none'
    r.style.display= 'none'
    as.style.display= 'none'
    c.style.display= 'block'
    b.style.display= 'none'
    sc.style.display= 'none'
    ac.style.display= 'none'
    lc.style.display= 'none'
    rc.style.display= 'none'
    asc.style.display= 'none'
    cc.style.display= 'block'
    bc.style.display = 'none'
  });

  b_switcher.addEventListener('mouseover', function() {    
    
    s.style.display= 'none'  
    l.style.display= 'none'
    a.style.display= 'none'
    r.style.display= 'none'
    as.style.display= 'none'
    c.style.display= 'none'
    b.style.display= 'block'
    sc.style.display= 'none'
    ac.style.display= 'none'
    lc.style.display= 'none'
    rc.style.display= 'none'
    asc.style.display= 'none'
    cc.style.display= 'none'
    bc.style.display= 'block'
  });
