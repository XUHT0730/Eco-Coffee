<template>
  <LoadingOverLay :active="isLoading" :z-index="1060" class="text-center" />
  <div class="container-fluid project py-10 mt-6">
    <div class="container">
      <h2 class="text-center mb-10 fw-bold">常見問題</h2>
      <div class="row justify-content-center mb-8">
        <div class="col-lg-10 col-sm-3">
          <ul
            class="accordion accordion-flush list-unstyled mt-3 mb-10"
            id="accordionFlushExample"
          >
            <li class="accordion-item shadow-sm mb-4">
              <h2 class="accordion-header" id="flush-headingOne">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <p
                    class="question rounded bg-primary text-white mb-0 me-3 me-sm-4 p-2 h5 ff-minor"
                  >
                    Q1
                  </p>
                  <span class="question fw-bold h5">到貨時間</span>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse show rounded-bottom"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body question-content">
                  訂單付款完成後 1 ~ 2天
                </div>
              </div>
            </li>
            <li class="accordion-item shadow-sm mb-4">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  <p
                    class="question rounded bg-primary mb-0 me-3 me-sm-4 p-2 h5 ff-minor text-white"
                  >
                    Q2
                  </p>
                  <span class="question h5 fw-bold">運送規定</span>
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body question-content">
                  <ul>
                    <li>
                      <p class="ms-0 ms-md-9">
                        送貨方式：
                        透過宅配送達。除網頁另有特別標示外，均為常溫配送。
                      </p>
                    </li>
                    <li>
                      <p class="ms-0 ms-md-9">
                        送貨範圍： 限台灣本島與離島地區
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="accordion-item shadow-sm mb-4">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  <p
                    class="question rounded bg-primary mb-0 me-3 me-sm-4 p-2 h5 ff-minor text-white"
                  >
                    Q3
                  </p>
                  <span class="question h5 fw-bold">退貨原則</span>
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body question-content">
                  <ul>
                    <li>
                      <p class="ms-0 ms-md-9">
                        上購物的消費者，都可以依照消費者保護法的規定，
                        享有商品貨到次日起七天猶豫期的權益。但猶豫期並非試用期，
                        請留意，您所退回的商品必須回復原狀
                      </p>
                    </li>
                    <li>
                      <p class="ms-0 ms-md-9">
                        咖啡豆由於考量食品衛生安全，除了商品本身瑕疵、損壞、
                        作業疏失或運送過程而造成的損毀，才能申請退換貨。
                        一經個人拆封、食用、失溫及保存不良等情形而導致商品變質，恕無法處理您的退換貨申請。
                      </p>
                    </li>
                    <li>
                      <p class="ms-0 ms-md-9">周邊商品退貨包裝完整。</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="accordion-item shadow-sm mb-4">
              <h2 class="accordion-header" id="flush-headingFour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  <p
                    class="question rounded bg-primary mb-0 me-3 me-sm-4 p-2 h5 ff-minor text-white"
                  >
                    Q4
                  </p>
                  <span class="question h5 fw-bold"> 咖啡豆保存方法</span>
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body question-content">
                  <ul>
                    <li>
                      <p class="ms-0 ms-md-9">保存日期參考包裝。</p>
                    </li>
                    <li>
                      <p class="ms-0 ms-md-9">保存於室內陰涼乾燥處。</p>
                    </li>
                    <li>
                      <p class="ms-0 ms-md-9">周邊商品退貨包裝完整。</p>
                    </li>
                    <li>
                      <p class="ms-0 ms-md-9">使用密封、非透明容器。</p>
                    </li>
                    <li>
                      <p class="ms-0 ms-md-9">沖泡前再磨成粉。</p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="accordion-item shadow-sm mb-4">
              <h2 class="accordion-header" id="flush-headingFive">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  <p
                    class="question rounded bg-primary h5 ff-minor text-white mb-0 me-3 me-sm-4 p-2"
                  >
                    Q5
                  </p>
                  <span class="question h5 fw-bold"> 發票相關資訊</span>
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body question-content">
                  <p>因應政府推動電子發票之落行，目前提供的發票開立類型：</p>
                  <ul>
                    <li>
                      <p class="ms-0 ms-md-9">
                        捐贈給慈善公益團體（財團法人中華民國兒童癌症基金會）。
                      </p>
                    </li>
                    <li>
                      <p class="ms-0 ms-md-9">
                        電子發票（可至訂單查詢中檢視，系統會為您自動對獎
                        ，中獎將信件通知並開立紙本發票掛號寄出至原訂單地址給您）。
                      </p>
                    </li>
                    <li>
                      <p class="ms-0 ms-md-9">
                        電子發票（使用手機條碼索取，須持有手機載具）。
                      </p>
                    </li>
                    <li>
                      <p class="ms-0 ms-md-9">
                        公司戶發票 ( 電子發票 ): 請您填寫統編 ，我們會在您付款後
                        3 天內以 email 方式將發票 pdf
                        檔寄送給您，不會再另外寄送紙本發票！
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 200);
  },
};
</script>
