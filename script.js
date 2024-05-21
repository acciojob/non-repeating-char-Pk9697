function firstNonRepeatedChar(str) {
 // Write your code here
	const mapp=new Map()
	let ans=null
	
	str.split('').forEach(ch=>{
		if(mapp.has(ch)){
			mapp.set(ch,mapp.get(ch)+1)
		}else{
			mapp.set(ch,1) 
		}
	})
	
	str.split('').forEach(ch=>{
		console.log(ch,mapp.get(ch))
		if(mapp.get(ch)===1){		
			ans=ch
		}
	})

	return ans
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
