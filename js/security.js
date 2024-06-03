function encrypt_text(password){
    const k = "key"; // 클라이언트 키
   const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
    const b = password;
    const eb = this.encodeByAES256(rk, b);
    return eb;
    console.log(eb);
    }
    function decrypt_text(){
        const k = "key"; // 서버의 키
       const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
        const eb = session_get();
        const b = this.decodeByAES256(rk, eb);
        console.log(b); 
       }