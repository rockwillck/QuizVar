javascript:function encodeASCII(string) {encoded = "";string.split("").forEach((char, index) => {encoded += char.charCodeAt() + (index != string.split("").length - 1 ? "-" : "")});return encoded};terms=`{"title":`;terms+="\"" + document.getElementsByTagName("title")[0].innerText + "\",\"terms\":[";for(i=0;i<document.getElementsByClassName("TermText").length/2;i++){terms += "\"" + (document.getElementsByClassName(`TermText`)[2*i].innerText) + (i == document.getElementsByClassName("TermText").length/2 - 1 ? "\"" : "\",")};terms+="],\"defs\":[";for(i=0;i<document.getElementsByClassName("TermText").length/2;i++){terms += "\"" + (document.getElementsByClassName(`TermText`)[2*i + 1].innerText) + (i == document.getElementsByClassName("TermText").length/2 - 1 ? "\"" : "\",")};terms+="]}";navigator.clipboard.writeText("file:///Users/williamchoi-kim/Desktop/QuizVar/index.html?" + encodeASCII(terms));alert("QuizVar Link copied to clipboard.");