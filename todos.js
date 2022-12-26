let input = prompt("What would you like to do?");
const todos= ['list app finish', 'js practice'];
while (input !== 'quit' && input !=="go away aysel"){ 
    if(input === 'list') {
        console.log('***********')
        for (let num = 0; num< todos.length; num++){ //sıra no num 0'dan başlar ve 1'er artar//
            console.log(`${num}: ${todos[num]}`); //konsolda numara: todo list çıkar//
        }
        console.log('*************')
    } else if (input === 'new') {   //yeni bir liste için input'a new girilir//
        const newTodo = prompt ("Ok, what's the new ones ?") //listeye yeni ne ekleyeceğini sorar,değişmez olm için const//
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`) //listeye ekleme için//
    } else if(input=== 'delete'){ //silme işlemi için//
        const index=parseInt(prompt('Which index do you want to delete:')) //silmek istediğimizin index'i sorar//
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);//splice ilk index ekleme veya ikinci kaldırmada kullanılır,burada kaldırma için//
            console.log(`Deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index') //index için sayı olmayan değer girilirse//
        }   
    }
    input= prompt('What would you like to do')
}
console.log('Good bye')
