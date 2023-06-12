//Task_1
/*Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль. */

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const parseXml = (xmlString) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const students = xmlDoc.getElementsByTagName('student');
    const result = {
      list: [],
    }
    for (let student of students) {
      let name = student.getElementsByTagName('name')[0];
      let firstName = name.getElementsByTagName('first')[0].textContent;
      let lastName = name.getElementsByTagName('second')[0].textContent;
      let age = student.getElementsByTagName('age')[0].textContent;
      let prof = student.getElementsByTagName('prof')[0].textContent;
      let lang = name.getAttribute('lang');
      let studentObj = {name: `${firstName} ${lastName}`, age: parseInt(age), prof, lang};
      result.list.push(studentObj);
    }
    return result;
  };
  
  console.log(parseXml(xmlString));

