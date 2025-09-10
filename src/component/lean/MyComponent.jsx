
import './style.css';


// JSX : là sức mạnh của react cho phép code HTML trong file Javascript
// trong file jsx chỉ có một cha html duy nhất ta có thể dùng thẻ div bọc ngoài nhưng các này dễ làm phá vỡ cấu trúc css nên ta dùng fragment 
// Fragment (mảnh vỡ) giúp bạn viết code ngắn di và không render "thừa html

const MyComponent = () => {
  return(
    <>
     <div> Hieu and React update</div>
    <div className="child">
        Viết trong HTML thêm CSS 
    </div>
    
    </>
   
  )
}

export default MyComponent;