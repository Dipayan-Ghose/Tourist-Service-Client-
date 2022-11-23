import { useEffect } from "react";

const useHelmet=(title)=>{
useEffect(()=>{
    document.title= `${title}-Tourist Service`;
},[title])
};

export default useHelmet;