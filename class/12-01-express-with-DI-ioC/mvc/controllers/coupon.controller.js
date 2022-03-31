// import { CashService } from './services/cash.service.js'

export class CouponController {
  constructor(moneyService) {
    this.moneyService = moneyService; // pointService를 받아옴(포인트로 계산한다.)
  }

  buyCounpon = (req, res) => {
    // 1. 가진돈 검증하는 코드
    // const cashService = new CashService()
    const hasMoney = this.moneyService.checkValue();

    // 2. 쿠폰 구매하는 코드
    if (hasMoney) {
      res.send("쿠폰 샀다이가!!!");
    }
  };
}
