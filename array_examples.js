//Multiplies matrices of letters
function aFunc(){
  var alphabet = ['a','b','c','d','e','f','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var a, b, c, e = []
  a = ['a','b','c']; b = ['d','e','f']; c = ['g','h','i']
  aa = ['j','k','l']; ab = ['m','n','o']; ac = ['p','q','r']
  ba = ['s','t','u']; bb = ['v','w','x']; bc = ['y','z',' ']
  var d = [a,b,c,aa,ab,ac,ba,bb,bc]
  var cubedAlpha = []
  var f , g , o , p , k = 0
  var q = 0
  var s = [0,1,2,4,5,6,7,8]
  function m(){
    for(var mm=0; mm<=25;mm++){
      for(q; q<=s.length-1;q++){
        for(k;k<=2;k++){
          e.push(alphabet[mm]), e.push(d[s[q]][k])
        }
        k=0
      }
      q=0
      cubedAlpha.push(e.join(''))
      e = []
    }

  }
  m()
  return cubedAlpha.join(',')
}
