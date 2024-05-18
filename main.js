document.addEventListener("DOMContentLoaded", function () {
  const chalets = document.querySelectorAll(".item_card");

  chalets.forEach(function (chalet) {
    chalet.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      const chaletId = this.getAttribute("data-id");

      // تحويل المستخدم إلى صفحة التفاصيل مع إضافة تصنيف الشالية ومعرف الشالية إلى عنوان الصفحة
      window.location.href = `property-details.html?category=${category}&id=${chaletId}`;
    });
  });
});
