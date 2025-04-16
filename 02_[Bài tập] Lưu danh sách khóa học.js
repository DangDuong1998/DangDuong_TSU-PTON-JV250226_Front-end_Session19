const submitButton = document.querySelector('.submit_button');
    const contentInput = document.querySelector('.content');
    const dateInput = document.querySelector('.date');
    const statusInput = document.querySelector('.status');
    const userInput = document.querySelector('.username');

const courses = [
    {
      id: 1,
      content: 'Learn Javascript Session 01',
      dueDate: '2023-04-17',
      status: 'Pending',
      assignedTo: 'Anh Bách',
    },
    {
      id: 2,
      content: 'Learn Javascript Session 2',
      dueDate: '2023-04-17',
      status: 'Pending',
      assignedTo: 'Lâm th`',
    },
    {
      id: 3,
      content: 'Learn CSS Session 1',
      dueDate: '2023-04-17',
      status: 'Pending',
      assignedTo: 'Hiếu Ci Ớt Ớt',
    }
  ];

if(!localStorage.getItem('courses')){
    localStorage.setItem('courses',JSON.stringify(courses));
}

const coursesShowList = document.querySelector('.show_list');
let localS= JSON.parse(localStorage.getItem('courses'));
submitButton.addEventListener('click',()=>{
    if(contentInput.value !==''&& dateInput.value!==''&&statusInput.value!=='choose'&&userInput.value!==''){
        let tempId = localS[localS.length-1].id+1;
        const task = {
            id: tempId,
            content: contentInput.value,
            dueDate: dateInput.value,
            status: statusInput.value,
            assignedTo:userInput.value,
        }
        localS.push(task);
        localStorage.setItem(`courses`,JSON.stringify(localS));
        contentInput.value='';
        dateInput.value='';
        statusInput.value='';
        userInput.value='';
        render();
    }
})

const render = ()=>{
    coursesShowList.innerHTML='';
    for(let i in localS){
        coursesShowList.innerHTML+= `
        <div class="list display_fomat">
            <div class="course_id">${+i+1}</div>
            <div class="course_content">${localS[i].content}</div>
            <div class="course_date">${localS[i].dueDate}</div>
            <div class="course_status">${localS[i].status}</div>
            <div class="course_assign">${localS[i].assignedTo} </div>
            <div class="course_action" >
                <button class = "fix_button">Sửa</button>
                <button class = "del_button">Xóa</button>
            </div>
        </div>
        <hr />`
    }

    const singleInfo = document.querySelectorAll('.list');
    singleInfo.forEach((el,i)=>{
        const fixButton = el.querySelector('.fix_button');
        const delButton = el.querySelector('.del_button');
        
        delButton.addEventListener('click',()=>{
            localS.splice(i,1);
            localStorage.setItem(`courses`,JSON.stringify(localS));
            render();
        })
        let isEdit=false;
        fixButton.addEventListener('click',()=>{
            if(isEdit===false){
                fixButton.innerText='Lưu'
                const editContent = el.querySelector('.course_content');
                const editDate = el.querySelector('.course_date');
                const editStatus = el.querySelector('.course_status');
                const editAssign = el.querySelector('.course_assign');
    
                editContent.innerHTML=`<input class="course_content fix_content" type="text" value="${editContent.innerText}">`;
                editDate.innerHTML=`<input class="course_date fix_date" type="date" value="${editDate.innerText}">`;
                editStatus.innerHTML=`
                <select class="course_status fix_status">
                    <option value="Pending">Pending</option>
                    <option value="Complete">Complete</option>
                </select>`;
                editAssign.innerHTML=`<input class="course_assign fix_assign" type="text" value="${editAssign.innerText}">`;
                isEdit=true;

            }
            else{
                const newContent = el.querySelector('.fix_content');
                const newDate = el.querySelector('.fix_date');
                const newStatus = el.querySelector('.fix_status');
                const newAssign = el.querySelector('.fix_assign');
                if(newContent.value!==''&& newDate.value!==''&& newStatus.value!==''&&newAssign.value!==''){
                    localS[i]={
                        id: i+1,
                        content:newContent.value,
                        dueDate: newDate.value,
                        status: newStatus.value,
                        assignedTo:newAssign.value,
                    }

                    localStorage.setItem(`courses`,JSON.stringify(localS));
                    isEdit = false;
                    render();
                }
                else{
                    alert('Không được để trống!!!')
                    
                }
                
            }
           
        })

        


    })
}
render();