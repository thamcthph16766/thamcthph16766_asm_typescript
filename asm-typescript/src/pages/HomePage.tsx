import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
        <div className="row  my-2">
          <div className="col-8">
            <img src="https://bizweb.dktcdn.net/100/428/064/themes/822352/assets/bn_pr_3.png?1639962198195" alt="" />
          </div>
          <div className="col-4">
          <h3 className='text-blue-500 lead fw-normal'>[TẶNG CHỮ KÝ DỊCH GIẢ] GIÀNH LẠI KHÔNG KHÍ SẠCH - SỰ KHỞI ĐẦU VÀ KẾT THÚC CỦA Ô NHIỄM KHÍ QUYỂN</h3>
          <p className=" mt-2">Đây là câu chuyện đầy đủ về những gì đã xảy ra với không khí chúng ta hít thở; giải thích chính xác ô nhiễm không khí là gì, hóa chất nào gây nguy hiểm và chúng đến từ đâu.

          Smedley phỏng vấn các nhà khoa học và chính trị gia đi đầu trong lĩnh vực này cũng như những người có cuộc sống bị ảnh hưởng bởi khói bụi, bên cạnh đó tiết lộ những trường hợp nghiêm trọng đã xảy ra ở London, Bắc Kinh, Delhi và LA.   </p>
          </div>
          
        </div>
        <div className="product-device shadow-sm d-none d-md-block" />
        <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
      </div>

      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a href="#" className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img src="	https://bizweb.dktcdn.net/100/428/064/products/buoi-dau-nhiep-anh-viet-nam.jpg?v=1625329699000" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="w-full h-full object-center object-cover group-hover:opacity-75" />
              </div>
              <h3 className="mt-4 text-sm text-gray-900">BUỔI ĐẦU NHIẾP ẢNH VIỆT NAM (BÌA MỀM)</h3>
              <p className="mt-1 text-lg font-medium text-red-700">395.100đ</p>
            </a>
            <a href="#" className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img src="https://bizweb.dktcdn.net/100/428/064/products/sucmanhcuasututetb2020-cc532187-7024-406a-b932-f377ffb073b5.jpg?v=1625329926000" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="w-full h-full object-center object-cover group-hover:opacity-75" />
              </div>
              <h3 className="mt-4 text-sm text-gray-900">SỨC MẠNH CỦA SỰ TỬ TẾ (TÁI BẢN NĂM 2020)</h3>
              <p className="mt-1 text-lg font-medium text-red-700">97.300đ</p>
            </a>
            <a href="#" className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img src="https://bizweb.dktcdn.net/100/428/064/products/bianeubiettramnamlahuuhantb202-6896d894-31f8-4589-a842-47a166e06ac4.jpg?v=1623955576000" alt="Person using a pen to cross a task off a productivity paper card." className="w-full h-full object-center object-cover group-hover:opacity-75" />
              </div>
              <h3 className="mt-4 text-sm text-gray-900">NẾU BIẾT TRĂM NĂM LÀ HỮU HẠN (TÁI BẢN NĂM 2020)</h3>
              <p className="mt-1 text-lg font-medium text-red-700">98.100đ</p>
            </a>
            <a href="#" className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img src="https://bizweb.dktcdn.net/100/428/064/products/khonggioihan-256a315a-311f-487b-baa6-d294725bd186.jpg?v=1623955570000" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="w-full h-full object-center object-cover group-hover:opacity-75" />
              </div>
              <h3 className="mt-4 text-sm text-gray-900">KHÔNG GIỚI HẠN - KHÁM PHÁ HO'OPONOPONO</h3>
              <p className="mt-1 text-lg font-medium text-red-700">134.100đ</p>
            </a>
            {/* More products... */}
          </div>
        </div>
      </div>

    </div>

  )
}

export default HomePage