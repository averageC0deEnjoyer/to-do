export default function currentProject(array, name){
    for(let i=0; i<array.length; i++){
        if(array[i].projectName === name){
            return array[i];
        }
    }
}