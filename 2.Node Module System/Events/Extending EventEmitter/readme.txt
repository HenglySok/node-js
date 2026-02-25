problem: នៅពេល event & listener នៅ file 2 ផ្សេងគ្នា។​ 
object របស់ class EventEmitter កើត​ 2 ផ្សេងគ្នា។​
ដែលធ្វើឲ listener & event​​ មិនអាចដំណើរការជាមួយគ្នាបាន។

solution
+ event (.emit) បង្កើត class ​មួយ extends ទៅកាន់ EventEmitter, ប្រើ this.emit
+ listener (.on) បង្កើត object class (event ដែល extends ពី EventEmitter), ប្រើ object​ នោះ object.on