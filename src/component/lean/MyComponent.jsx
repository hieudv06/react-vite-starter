
import './style.css';


// JSX : là sức mạnh của react cho phép code HTML trong file Javascript
// trong file jsx chỉ có một cha html duy nhất ta có thể dùng thẻ div bọc ngoài nhưng các này dễ làm phá vỡ cấu trúc css nên ta dùng fragment 
// Fragment (mảnh vỡ) giúp bạn viết code ngắn di và không render "thừa html

const MyComponent = () => {

  // Biến số : 
  // Dứ liệu nguyên thủy : String , number, boolean, undefined, null
  // Dữ liệu object (array)
  // Nguyên tắc : sử dụng cặp dấu ngoặc nhọn {} để viết code javascript bên trong html

  // Ví dụ
    const bienString ="String";
    const bienNumber = 1;
    const bienBoolean = true;
    const bienUndefined =undefined;
    const bienNull = null;
    // Bien oject 
    const bienArray =[1,2,3]
    const bienObject = {
        name: "Hieudv",
        age: 25
    }

  return(
    <>
     <div> Hieu and React update</div>
    <div className="child">
        Viết trong HTML thêm CSS 
    </div>
    <div> Sử dụng biến dùng dấu ngoặc nhọn "{}"
      bienString = {bienString} 
       <p></p>
      bienNumber = {bienNumber}
       <p></p>
      bienBoolean = {bienBoolean}
       <p></p>
      bienNull ={bienNull}
       <p></p>
      bienUndefined = {bienUndefined}
       <p></p>
      bienArray ={JSON.stringify(bienArray)}
      <p></p>
    Với biến object thì dùng function 
      bienObject = {JSON.stringify (bienObject)}
    </div>
    
    </>
   
  )
}

export default MyComponent;