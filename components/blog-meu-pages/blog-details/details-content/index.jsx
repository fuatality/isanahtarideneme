import CommentBox from "./CommentBox";
import Form from "./Form";
import Pagination from "./Pagination";
import SocialShare from "./SocialShare";
import Tag from "./Tag";

const index = () => {
  return (
    <div className="auto-container">
      <h4>Kariyer Hedeflerinizi Gerçekleştirmenin Yeni Yolu</h4>

      <p>
        ChatGPT, OpenAI tarafından geliştirilen bir dil modeli olarak, 
        kullanıcıların ilgisini çekmeyi başardı. Fizik sorularını çözme yeteneğinden, 
        kişiye özel şiirler yazmaya kadar geniş bir yelpazede hizmet sunan ChatGPT, 
        kariyer hedeflerinizi gerçekleştirmenize yardımcı olacak bir yol arkadaşı 
        olarak da kullanılabilir. Peki, ChatGPT ile mülakat hazırlığı nasıl yapılır? 
        İşte detaylar:
      </p>

      <h4><strong>ChatGPT ile Mülakat Sorularını Gözden Geçirin</strong></h4>

      <p>
        &quto;Sık sorulan mülakat soruları nelerdir?&quot; gibi basit bir soruyla
        başlayarak, ChatGPT&apos;nin geniş veri tabanından mülakat sorularına 
        ulaşabilirsiniz. Bu soruları gözden geçirerek, güçlü ve zayıf yönlerinizi 
        belirleyebilirsiniz. Eğer verdiğiniz bir cevabın daha iyi bir versiyonu 
        olabileceğini düşünüyorsanız, ChatGPT&apos;den farklı ifade şekilleri talep 
        edebilirsiniz. Ancak unutmayın, her mülakat ve sorular, mülakata gireceğiniz 
        şirkete göre değişecektir.

        <strong>Prompt Örneği:</strong>&quto;Sık sorulan mülakat soruları nelerdir?&quot; 
        veya &quot;Bu cevabımı nasıl daha iyi ifade edebilirim?&quot;
      </p>

      <blockquote className="blockquote-style-one mb-5 mt-5">
        <p>
          Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec.
          Quisque bibendum orci ac nibh facilisis, at malesuada orci congue.{" "}
        </p>
        <cite>Luis Pickford</cite>
      </blockquote>
      {/* End BlogQuote */}

      <h4>What you&apos;ll learn</h4>
      <ul className="list-style-four">
        <li>Become a UI/UX designer.</li>
        <li>Build a UI project from beginning to end.</li>
        <li>You will be able to start earning money Figma skills.</li>
        <li>Work with colors & fonts.</li>
        <li>You will create your own UI Kit.</li>
        <li>Become a UI/UX designer.</li>
        <li>Build a UI project from beginning to end.</li>
        <li>You will be able to start earning money Figma skills.</li>
        <li>Work with colors & fonts.</li>
        <li>You will create your own UI Kit.</li>
      </ul>
      {/* List */}

      <figure className="image">
        <img src="/images/resource/post-img.jpg" alt="resource" />
      </figure>

      <h4>Requirements</h4>
      <ul className="list-style-three">
        <li>
          We do not require any previous experience or pre-defined skills to
          take this course. A great orientation would be enough to master UI/UX
          design.
        </li>
        <li>A computer with a good internet connection.</li>
        <li>Adobe Photoshop (OPTIONAL)</li>
      </ul>
      {/* <!-- list --> */}

      <div className="other-options">
        <div className="social-share">
          <h5>Share this post</h5>
          <SocialShare />
        </div>
        {/* End social-share */}

        <Tag />
      </div>
      {/* End other share */}

      <div className="post-control">
        <Pagination />
      </div>
      {/* <!-- Post Control --> */}

      <div className="comments-area">
        <CommentBox />
      </div>

      {/* <!-- Comments area --> */}

      {/* <!-- Comment Form --> */}
      <div className="comment-form default-form">
        <h4>Leave your thought here</h4>
        <Form />
      </div>
      {/* <!--End Comment Form --> */}
    </div>
  );
};

export default index;
