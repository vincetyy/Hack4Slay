import MarkdownIt from "markdown-it";
import myHtmlContent from './index.html';
const md = new MarkdownIt({ html: true });

export default function Game(block) {
  // return (
  //   <section className="feature-hero">
  //     <div className="container">
  //       <div id="footer">
  //       </div>
  //       <div class="backdrop" id="modal">
  //         <div id="center-modal">
  //           <div id="modal-content">
  //             <p class="header">Good Morning!</p>
  //             <p class="close-button" onmouseup="closeModal();">&times;</p>
  //             <p class="modal-p">Welcome to your Garden! This is your great tree.<br />
  //               <br />Nurture your tree with water and grow delicious apples we love<br />
  //               <br />Let's begin your journey with us!</p>
  //           </div>
  //         </div>
  //       </div>
  //       <div id="imgmodal" class="imgmodal">
  //         <div id="center-modal">
  //           <div id="modal-img">
  //             <p class="close-button" onclick="closeimgModal();">&times;</p>
  //             <p class="header">Select an image to upload</p>
  //             <input type="file" id="imageInput" accept="image/*" />
  //             <button id="submitButton" onclick="uploadImg();">Upload</button>
  //             <div id="imagePreviewContainer">
  //               <img id="imagePreview" src="" alt="Image preview" />
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div id="game">
  //         <div id="rightPanel">
  //           <div id="header">STUFFS</div>
  //           <div id="store"></div>
  //         </div>
  //         <div id="separatorRight"></div>
  //         <div id="middle">
  //           <div id="factoryName" onmouseup="ChangeName();">Apple's Garden</div>
  //           <div id="comment">Loading..</div>
  //           <div id="treeContainer">
  //             <div id="treesContainer">
  //             </div>
  //             <div id="tps">Loading...</div>
  //           </div>
  //           <div class="bigTreeHover bigTreeAction" id="bigTree" onmouseup="ClickTree();"></div>
  //         </div>
  //         <div id="separatorLeft"></div>
  //         <div id="leftPanel">
  //           <div class="container">
  //             <button class="options" id="stats-btn" onmouseup="showStats();">Missions</button>
  //             <button class="options selected" id="options-btn" onmouseup="showOptions();">Options</button>
  //           </div>
  //           <div class="tabcontent" id="options">
  //             <span class="menu" onclick="Save();">Save</span>
  //             <span class="menu" onclick="exportSave();">Export save</span>
  //             <span class="menu" onclick="importSave();">Import save</span>
  //             <span class="menu" onclick="Reset();">Reset</span>
  //             <br /><br />
  //             <span class="menu" id="toggleNumbers" onmouseup="ToggleNumbers();">Numbers On</span>

  //             <span class="menu" id="toggleParticles" onmouseup="ToggleParticles();">Particles On</span>
  //             <span class="menu" id="toggleAudio" onmouseup="ToggleAudio();">Audio On</span>
  //           </div>
  //           <div class="tabcontent hidden" id="stats">
  //             <div class="spacing">
  //               <p>Total apples: <span id="apples">Loading...</span></p>
  //               <p>Times watered: <span id="treeClicked">Loading...</span></p>

  //               <button id="uploadButton" onclick="uploadButton();">Upload Image</button>
  //               <div id="missions"></div>
  //             </div>
  //           </div>
  //         </div>
  //         <div id="treeFloor"></div>
  //         <div id="pops"></div>
  //       </div>
  //       <script src={block.js}></script>
  //       <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  //     </div>
  //   </section>
  // );
  return <div dangerouslySetInnerHTML={myHtmlContent} />;
}
