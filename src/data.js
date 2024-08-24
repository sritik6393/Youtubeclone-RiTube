export const API_KEY='AIzaSyBXSgC8Jmn8b13TvsBHDjOlsZQ8o6mjFK4';
export const value_convertor=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if (value>=1000){
        return Math.floor(value/1000)+"K";
    }
else{
    return value;
}
}
