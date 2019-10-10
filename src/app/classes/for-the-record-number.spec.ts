import { ForTheRecordNumber } from './for-the-record-number';

describe('ForTheRecordNumber', () => {
  it('should create an instance', () => {
    expect(new ForTheRecordNumber("1")).toBeTruthy();
    expect(new ForTheRecordNumber("0")).toBeTruthy();
    expect(new ForTheRecordNumber("55")).toBeTruthy();
    expect(new ForTheRecordNumber("26863810024485359386146727202142923967616609318986952340123175997617981700247881689338369654483356564191827856161443356312976673642210350324634850410377680367334151172899169723197082763985615764450078474174626")).toBeTruthy();
  });
  it("should be able to handle unreasonably long numbers", () => {
    let newFTRN = new ForTheRecordNumber("26863810024485359386146727202142923967616609318986952340123175997617981700247881689338369654483356564191827856161443356312976673642210350324634850410377680367334151172899169723197082763985615764450078474174626");
    expect(newFTRN).toBeTruthy();
  });
  it("should be able to increase frequency", () => {
    let newFTRN = new ForTheRecordNumber("26863810024485359386146727202142923967616609318986952340123175997617981700247881689338369654483356564191827856161443356312976673642210350324634850410377680367334151172899169723197082763985615764450078474174626");
    expect(newFTRN).toBeTruthy();
    expect(newFTRN.frequency).toEqual(1);
    newFTRN.increaseFrequency();
    expect(newFTRN.frequency).toEqual(2);
  });
});
