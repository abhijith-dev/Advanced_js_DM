const json_data={
    name:"raj",
    age:24,
    company:"Datamatics",
    salary:45000
}

let stringified_data=JSON.stringify(json_data)
console.log(stringified_data);
console.log(typeof(stringified_data))

const string_data='{"name":"raj","age":24, "company":"Datamatics", "salary":45000}';

let parsed_data=JSON.parse(string_data)
console.log(parsed_data)
console.log(typeof(parsed_data))