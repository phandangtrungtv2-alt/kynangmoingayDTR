// Five different situations per skill, with a different practice format in each lesson.
// The first 30 legacy lessons retain their IDs in lessons.ts.
import {makeQuiz,skillChoices} from './lesson-choices';
type Unit={category:string;skill:string;explain:string;remember:string;application:string;cases:[string,string][]};
const units:Unit[]=[
{category:'Giao tiếp',skill:'chào hỏi phù hợp với người và hoàn cảnh',explain:'Con có thể chào bằng lời, gật đầu hoặc vẫy tay. Nói vừa đủ nghe và tôn trọng khoảng cách; chào hỏi không bắt buộc phải ôm hay chạm vào người khác.',remember:'Chào thân thiện theo cách con thoải mái.',application:'Chọn một người con sẽ chào trong lần gặp tới.',cases:[
['Gặp cô ở cổng trường','An gặp cô ở cổng nhưng cô đang nói chuyện với một phụ huynh. An muốn chào mà không chen lời.'],
['Chào bạn vừa chuyển đến','Một bạn mới ngồi cạnh My và chưa biết tên ai trong lớp. My muốn giúp bạn bớt ngại.'],
['Khách đến nhà mình','Nhà có khách, Bình muốn chào bằng lời nhưng không muốn ôm. Bạn chưa biết nói thế nào.'],
['Tạm biệt sau buổi chơi','Buổi chơi kết thúc, Hà đang cất đồ và quên chào bà của bạn trước khi về.'],
['Chào người đang làm việc','Chú bảo vệ đang hướng dẫn xe vào cổng. Nam muốn cảm ơn và chào chú mà không cản công việc.']]},
{category:'Giao tiếp',skill:'kể một việc theo trình tự dễ hiểu',explain:'Bắt đầu bằng ai, ở đâu; kể việc xảy ra trước rồi đến việc sau. Kết thúc bằng kết quả hoặc cảm xúc. Không cần thêm chi tiết riêng tư của người khác.',remember:'Kể có đầu, có diễn biến, có kết thúc.',application:'Kể lại một việc nhỏ trong ngày bằng ba câu.',cases:[
['Chuyến đi đến thư viện','Mai kể từ đoạn mượn sách rồi quay về lúc ra khỏi nhà, khiến bố chưa hiểu chuyến đi.'],
['Chiếc tháp giấy đã đổ','Khoa muốn kể vì sao tháp giấy đổ nhưng nói ngay kết quả, bỏ qua lúc đặt sách lên tháp.'],
['Một điều vui trong giờ ra chơi','Ly có nhiều chuyện muốn kể và chuyển liên tục giữa trò đuổi bắt với chuyện ăn bánh.'],
['Kể lại việc con đã giúp','Bảo nói mình giúp bà nhưng chưa kể bà cần gì và mình đã làm phần nào.'],
['Ba bức tranh thành câu chuyện','An có tranh gieo hạt, tưới cây và cây lớn nhưng xếp chúng lộn thứ tự.']]},
{category:'Giao tiếp',skill:'đặt câu hỏi để hiểu rõ điều chưa biết',explain:'Nói điều con đã hiểu rồi hỏi phần còn chưa rõ. Mỗi lần hỏi một ý giúp người nghe trả lời đúng điều con cần; không hiểu không phải là lỗi.',remember:'Chưa rõ chỗ nào, hỏi đúng chỗ ấy.',application:'Thử một câu hỏi bắt đầu bằng “Con chưa hiểu phần…”.',cases:[
['Con chưa rõ luật chơi','Các bạn giải thích luật rất nhanh. Tú biết cách bắt đầu nhưng chưa hiểu khi nào đổi lượt.'],
['Cô giao hai việc','Cô dặn lấy vở và làm bài. Huy chưa nghe rõ cần làm trang nào.'],
['Hỏi về một từ mới','Trong truyện có từ “kiên nhẫn”. Mai đoán nghĩa nhưng muốn kiểm tra với mẹ.'],
['Chưa rõ điểm hẹn','Bố nói đợi ở cửa sau giờ học. An thấy có hai cửa và chưa biết cửa nào.'],
['Làm rõ phần việc nhóm','Nhóm nhờ My chuẩn bị đồ dùng nhưng chưa nói cần giấy màu hay giấy trắng.']]},
{category:'Giao tiếp',skill:'nói ý kiến khác một cách tôn trọng',explain:'Bắt đầu bằng điều mình nghĩ và lý do, không chê người có ý kiến khác. Nghe lại lý do của bạn rồi tìm điểm có thể thống nhất; chưa thống nhất có thể nhờ hỗ trợ.',remember:'Khác ý vẫn nói lời tôn trọng.',application:'Nêu một sở thích của con và nghe sở thích khác của người thân.',cases:[
['Con thích kết thúc khác','Sau khi đọc truyện, bố thích đoạn kết còn con muốn nhân vật quay lại giúp bạn.'],
['Chọn màu cho tấm biển','Nhóm chọn màu đỏ, Vy nghĩ màu xanh dễ nhìn hơn nhưng sợ bị nói là cãi.'],
['Hai cách giải một câu đố','Nam và Minh tìm ra hai cách giải khác nhau. Nam định nói cách của Minh thật ngốc.'],
['Bữa phụ con chưa thích','Người lớn gợi ý một món, Hà muốn món khác và cần nói rõ sở thích mà không quát.'],
['Bình chọn trò chơi mới','Đa số bạn thích nhảy dây, An thích ghép hình và muốn nói ý kiến trước khi cả nhóm chọn.']]},
{category:'Giao tiếp',skill:'góp ý vào hành động cụ thể thay vì chê con người',explain:'Nêu điều con quan sát, ảnh hưởng của nó và một đề nghị có thể làm. Tránh các từ như “lúc nào cũng” hoặc đặt biệt danh; chọn lúc người kia sẵn sàng nghe.',remember:'Nói việc cần sửa, không chê người.',application:'Góp ý một việc nhỏ bằng câu “Khi… mình… bạn có thể…?”.',cases:[
['Bạn viết tên con sai','Tấm thiệp của nhóm ghi sai tên Ly. Ly muốn nhờ sửa mà không làm bạn xấu hổ.'],
['Chiếc ghế chắn lối','Bạn để ghế giữa đường đi khiến My khó mang sách qua. My định cáu lên.'],
['Nhạc hơi lớn khi con đọc','Anh bật nhạc trong lúc An đọc sách. An muốn đề nghị giảm âm lượng.'],
['Tranh chung còn thiếu tên','Các bạn hoàn thành tranh nhưng quên tên người tô nền. Bình muốn nhắc cả nhóm bổ sung.'],
['Bạn nói quá nhanh','Huy không theo kịp lời hướng dẫn của bạn và muốn nhờ bạn nói chậm một chút.']]},
{category:'Giao tiếp',skill:'đón nhận góp ý và hỏi cách cải thiện',explain:'Nghe phần việc được góp ý, hỏi ví dụ nếu chưa rõ và chọn một bước sửa. Con có thể không đồng ý với lời xúc phạm và nhờ người lớn giúp; góp ý không quyết định giá trị của con.',remember:'Nghe điều có ích, sửa từng bước.',application:'Nhờ người thân góp ý một việc nhỏ và thử sửa một điểm.',cases:[
['Bài kể còn thiếu đoạn cuối','Cô nói câu chuyện của An chưa có kết thúc. An tưởng cô chê toàn bộ bài của mình.'],
['Bạn nhắc con nói nhỏ','Trong thư viện, một bạn nhắc Mai hạ giọng. Mai thấy ngại và muốn cãi lại.'],
['Giấy gấp chưa thẳng','Mẹ chỉ một nếp gấp lệch của Nam. Nam định vò cả tờ giấy vì thất vọng.'],
['Nhóm cần con báo sớm','Bạn góp ý Bình thường báo nghỉ nhóm quá muộn. Bình cần hỏi cách báo thuận tiện hơn.'],
['Một lời chê không tử tế','Một bạn nói “cậu chẳng làm được gì”. Ly muốn biết phần nào cần sửa nhưng lời nói ấy làm Ly buồn.']]},
{category:'Giao tiếp',skill:'trình bày ngắn gọn trước một nhóm nhỏ',explain:'Chọn một ý chính và hai chi tiết, nói với tốc độ vừa phải. Có thể dùng tranh nhắc ý, ngừng để thở hoặc nhờ hỗ trợ; không bắt buộc nhìn thẳng vào mắt mọi người.',remember:'Một ý rõ ràng, nói từng câu.',application:'Giới thiệu một món đồ quen thuộc trong khoảng một phút.',cases:[
['Giới thiệu cuốn sách con thích','My muốn kể cả cuốn truyện nhưng chỉ có một phút để giới thiệu với nhóm.'],
['Khoe sản phẩm tự làm','An cầm chiếc thuyền giấy trước lớp và quên điều định nói về cách gấp.'],
['Nói về một góc nhà','Hà được chọn một góc yêu thích để kể cho gia đình và chưa biết mở đầu.'],
['Trình bày ý tưởng sân chơi','Nhóm muốn thêm góc đọc sách. Nam cần giải thích ý tưởng cho các bạn hiểu.'],
['Khi đang nói thì quên ý','Đang giới thiệu bức vẽ, Bình bỗng quên chi tiết tiếp theo và muốn bỏ cuộc.']]},
{category:'Giao tiếp',skill:'nói lời cảm ơn cụ thể và chân thành',explain:'Nói rõ người kia đã làm gì và điều đó giúp con thế nào. Không phải trả quà hay đồng ý mọi yêu cầu để thể hiện biết ơn; một lời hoặc tấm thiệp là đủ.',remember:'Cảm ơn vì một việc cụ thể.',application:'Nhận ra và cảm ơn một sự giúp đỡ thật trong ngày.',cases:[
['Bạn giữ chỗ sách giúp con','Bạn nhặt và giữ cuốn sách An đánh rơi. An muốn cảm ơn về việc đó.'],
['Bữa cơm được chuẩn bị','Bà nấu món cả nhà cùng ăn. Mai muốn nói điều mình trân trọng ngoài câu “ngon quá”.'],
['Chú lao công dọn sân','Sân trường sạch sau giờ ra chơi. Nam nhận ra có người đã âm thầm dọn dẹp.'],
['Cô kiên nhẫn giải thích','Cô giảng lại phần Tú chưa hiểu. Tú thấy tự tin hơn khi làm bài.'],
['Cảm ơn lời từ chối tử tế','Bạn chưa cho mượn bút vì đang dùng nhưng hẹn chuyển sau. Hà muốn đáp lại lịch sự.']]},
{category:'Giao tiếp',skill:'trao đổi tin nhắn ngắn rõ ràng với người quen dưới sự hướng dẫn',explain:'Cùng phụ huynh kiểm tra đúng người nhận, chào, nêu một việc và đọc lại trước khi gửi. Không gửi địa chỉ, mật khẩu hay thông tin riêng; không cần trả lời ngay khi đang nghỉ.',remember:'Đúng người, rõ việc, đọc lại.',application:'Soạn tin nhắn mẫu trên giấy; chỉ gửi thật khi phụ huynh đồng ý.',cases:[
['Tin nhắn hỏi bài còn thiếu','My viết “cái đó đâu” cho bạn. Người đọc không biết My đang hỏi trang bài tập nào.'],
['Nhắn báo đổi giờ chơi','Gia đình thay đổi kế hoạch. Nam muốn nhờ bố mẹ báo bạn rằng buổi chơi sẽ dời.'],
['Đọc lại trước khi gửi','Tin nhắn của Ly thiếu chữ “không”, khiến ý nghĩa câu bị đảo ngược.'],
['Dấu chấm than quá nhiều','Bình gõ nhiều dấu chấm than khi hỏi mượn đồ, khiến câu hỏi trông như đang giận.'],
['Chưa nhận được trả lời','An gửi lời hỏi thăm bà rồi sốt ruột muốn gửi thêm mười tin liên tiếp.']]},
{category:'Giao tiếp',skill:'xin phép và báo lại khi dùng đồ hoặc thay đổi kế hoạch',explain:'Nêu rõ muốn làm gì, dùng trong bao lâu và chờ câu trả lời. Nếu chưa được phép thì dừng; xin phép xong vẫn cần báo khi trả đồ hoặc khi kế hoạch thay đổi.',remember:'Hỏi trước, chờ đáp, báo lại.',application:'Tập xin phép dùng một món đồ chung an toàn.',cases:[
['Mượn kéo của bố mẹ','An muốn dùng kéo trong ngăn bàn để làm thủ công nhưng chưa hỏi người lớn hỗ trợ.'],
['Đổi chỗ ngồi trong lớp','Hà muốn chuyển chỗ để nhìn bảng rõ hơn và cần nói với cô trước.'],
['Dùng giấy màu của chị','Tú thấy tập giấy đẹp của chị và định lấy một tờ vì nghĩ chị không để ý.'],
['Muốn ở chơi thêm','Đến lúc về, My muốn chơi thêm một lượt nhưng người đón đang chờ.'],
['Trả món đồ đã mượn','Bình dùng xong bút của bạn rồi để ở nơi khác mà chưa báo, khiến bạn tìm mãi.']]},
{category:'Cảm xúc',skill:'nhận ra dấu hiệu cảm xúc trong cơ thể',explain:'Cơ thể có thể nóng mặt, căng vai hoặc tim đập nhanh khi xúc động. Dừng và gọi tên cảm xúc theo cách con cảm nhận; nếu khó chịu kéo dài hay đau, báo người lớn để được hỗ trợ.',remember:'Lắng nghe cơ thể, nói điều con cảm thấy.',application:'Vẽ hình người và chỉ một dấu hiệu cảm xúc con nhận ra.',cases:[
['Hai bàn tay siết chặt','Khi thua trò chơi, Nam siết tay và chưa nhận ra mình đang bực.'],
['Bụng nao nao trước giờ kể','Sắp đến lượt kể chuyện, Mai thấy bụng nao nao dù đã chuẩn bị.'],
['Mặt nóng khi được khen','Cô khen bức tranh, Hà thấy nóng mặt và vừa vui vừa ngại.'],
['Vai căng khi phòng ồn','Tiếng nhiều người nói khiến An căng vai và muốn ra chỗ yên hơn.'],
['Nước mắt vì nhớ nhà','Trong buổi đi chơi với lớp, Ly thấy muốn khóc khi nhớ người thân.']]},
{category:'Cảm xúc',skill:'tạo khoảng nghỉ để lấy lại bình tĩnh',explain:'Chọn chỗ an toàn, báo người lớn và nghỉ theo cách dễ chịu: ngồi yên, uống nước hoặc thở chậm tự nhiên. Khoảng nghỉ không phải hình phạt; quay lại khi đã sẵn sàng.',remember:'Con được nghỉ để bình tĩnh hơn.',application:'Thống nhất một câu xin nghỉ và một chỗ nghỉ an toàn.',cases:[
['Bàn học quá nhiều việc','An nhìn nhiều bài cần làm và bắt đầu cáu với người ngồi cạnh.'],
['Vừa đi học về đã mệt','My muốn được ngồi yên một chút trước khi kể chuyện ở trường cho mẹ.'],
['Ồn ào trong buổi sinh nhật','Bình vui nhưng thấy quá nhiều âm thanh. Bạn cần một chỗ nghỉ gần người thân.'],
['Tranh luận đang nóng lên','Hà và anh nói mỗi lúc một to về lượt chơi, chưa ai nghe ai.'],
['Quay lại sau khi nghỉ','Nam đã bình tĩnh hơn nhưng ngại mở lời tiếp tục cuộc trò chuyện còn dang dở.']]},
{category:'Cảm xúc',skill:'ứng xử khi thất vọng mà không tự chê mình',explain:'Có thể buồn khi điều mong đợi không xảy ra. Nói điều mình tiếc, tìm điều vẫn có thể làm và nhờ người thân đồng hành. Không cần vui ngay để làm người khác yên lòng.',remember:'Thất vọng được nói ra, rồi chọn bước tiếp.',application:'Vẽ hai ô: điều con mong và điều con có thể làm tiếp.',cases:[
['Buổi dã ngoại gặp mưa','Cả nhà phải hoãn chuyến đi mà Ly đã mong suốt tuần.'],
['Không được vai mình thích','Trong vở kịch, An nhận vai khác với vai đã đăng ký.'],
['Cửa hàng hết món đồ','Bình dành tiền mua một cuốn truyện nhưng đến nơi thì cuốn đó đã hết.'],
['Bức vẽ chưa như ý','Màu bị lem khiến My muốn bỏ bức tranh đã vẽ rất lâu.'],
['Bạn không đến chơi được','Hà chuẩn bị trò chơi nhưng bạn báo bận việc gia đình vào phút cuối.']]},
{category:'Cảm xúc',skill:'chăm sóc nỗi buồn và tìm người lắng nghe',explain:'Buồn không phải điều đáng xấu hổ. Con có thể kể, vẽ hoặc ngồi cạnh người tin cậy. Nếu nỗi buồn khiến ăn, ngủ hay học khó khăn, tiếp tục nói để người lớn tìm hỗ trợ phù hợp.',remember:'Buồn cũng xứng đáng được lắng nghe.',application:'Chọn một cách an toàn con muốn được an ủi.',cases:[
['Bạn thân chuyển lớp','Nam nhớ bạn cũ khi đến giờ ra chơi và chưa quen nhóm bạn mới.'],
['Đồ chơi thân thuộc bị hỏng','Con gấu giấy My tự làm bị rách. Người khác nghĩ đó chỉ là một tờ giấy.'],
['Nhớ ông bà ở xa','Sau kỳ nghỉ, An buồn vì phải tạm biệt ông bà và trở về nhà.'],
['Hôm nay con không muốn kể','Mẹ hỏi chuyện, Hà chỉ muốn ngồi cạnh một lúc rồi mới nói.'],
['An ủi theo cách con cần','Ly đang buồn, mọi người liên tục đùa cho vui nhưng Ly muốn được nghe trước.']]},
{category:'Cảm xúc',skill:'nhận ra ghen tị và chuyển thành mong muốn có thể nói',explain:'Ghen tị cho biết con cũng đang mong một điều. Nói điều mình muốn mà không làm hỏng niềm vui của người khác. Có thể học một cách làm, xin thời gian riêng hoặc chờ cơ hội khác.',remember:'Mong muốn của con có thể nói bằng lời.',application:'Hoàn thành câu “Con cũng muốn… con có thể bắt đầu bằng…”.',cases:[
['Bạn có hộp màu mới','Huy thấy bạn được tặng hộp màu đẹp và muốn chê món đồ để bớt tủi.'],
['Em được mẹ bế lâu hơn','An nghĩ mẹ chỉ thương em vì em nhỏ cần được bế nhiều.'],
['Bạn nhận phần thưởng','Ly vui cho bạn nhưng cũng buồn vì mình chưa được gọi tên.'],
['Anh làm được điều con chưa làm','Bình nhìn anh buộc dây giày nhanh và nghĩ mình kém hơn mọi mặt.'],
['Bạn được đi chơi xa','My nghe bạn kể chuyến du lịch và muốn bịa rằng mình cũng đã đi.']]},
{category:'Cảm xúc',skill:'giảm lo lắng bằng việc phân biệt điều biết và điều đang đoán',explain:'Hỏi mình đã biết chắc điều gì, còn điều gì cần hỏi thêm. Chọn một việc nhỏ có thể chuẩn bị và nói với người lớn về phần còn lo; không phải mọi điều con tưởng tượng đều sẽ xảy ra.',remember:'Hỏi cho rõ, chuẩn bị từng việc.',application:'Chia giấy thành “đã biết”, “cần hỏi” và “có thể làm”.',cases:[
['Sắp gặp giáo viên mới','An chưa gặp cô mới và tưởng cô sẽ rất nghiêm chỉ vì lời kể của một bạn.'],
['Lần đầu vào câu lạc bộ','My không biết buổi sinh hoạt kéo dài bao lâu và ai sẽ đón mình.'],
['Bài kiểm tra ngày mai','Nam nghĩ chỉ cần sai một câu thì mọi người sẽ thất vọng về mình.'],
['Gia đình đổi chỗ ở','Hà nghe chuyện chuyển nhà và lo sẽ không còn được gặp bạn cũ nữa.'],
['Chờ người thân đến đón','Bố đến muộn hơn dự kiến, Ly bắt đầu tưởng tượng nhiều chuyện đáng sợ.']]},
{category:'Cảm xúc',skill:'tự nói với mình bằng lời tử tế',explain:'Thay lời kết luận về bản thân bằng mô tả việc đang khó và một bước có thể thử. Con không phải làm giỏi mọi việc để được yêu thương; nhờ giúp không làm con yếu đi.',remember:'Nói với mình như nói với một người bạn.',application:'Đổi một câu tự chê thành câu có bước tiếp theo.',cases:[
['Sai một phép tính','An làm sai phép tính và nói “con học dở nhất lớp”.'],
['Chạy chậm hơn bạn','My về sau trong một trò chơi và nghĩ mình chẳng nên tham gia nữa.'],
['Quên lời bài hát','Bình quên một câu khi hát và muốn nói mình thật vô dụng.'],
['Viết chữ chưa đều','Hà nhìn trang vở của bạn rồi tự chê trang vở mình rất xấu.'],
['Chưa dám bắt chuyện','Nam thấy ngại nói với bạn mới và cho rằng mình không thể có bạn.']]},
{category:'Cảm xúc',skill:'kiên trì bằng cách thay đổi chiến lược và nghỉ đúng lúc',explain:'Kiên trì không phải cố mãi một cách. Xem bước nào vướng, thử cách khác hoặc nhờ làm mẫu; nghỉ khi mệt và quay lại sau. Không thử lại việc nguy hiểm.',remember:'Đổi cách, nhờ giúp, thử từng bước.',application:'Chọn một việc vừa sức và thử hai cách làm an toàn.',cases:[
['Mảnh ghép chưa khớp','Tú cứ ấn một mảnh vào cùng vị trí dù nó không vừa.'],
['Buộc nút dây mô hình','An tập buộc nút trên dây đồ chơi nhưng kéo hai đầu cùng lúc nên nút tuột.'],
['Đọc một từ dài','My đọc vội một từ nhiều tiếng rồi nản vì vấp liên tục.'],
['Tháp cốc không đứng','Bình xếp cốc nhẹ lên nền nghiêng và thấy tháp cứ đổ.'],
['Luyện nhiều đã mỏi','Hà tập viết khá lâu, tay mỏi nhưng nghĩ nghỉ là bỏ cuộc.']]},
{category:'Cảm xúc',skill:'tự tin từ những điểm mạnh và tiến bộ cụ thể',explain:'Điểm mạnh có thể là biết giúp, chịu lắng nghe hoặc chịu thử. Nói một ví dụ thật thay vì phải giỏi hơn người khác. Mỗi người vừa có thế mạnh vừa có điều cần học.',remember:'Con có điểm mạnh và vẫn đang học thêm.',application:'Lập một tấm thẻ ghi hai việc con đã làm tốt hơn trước.',cases:[
['Con giỏi lắng nghe','Bạn thích kể với Ly vì Ly nghe hết câu, nhưng Ly nghĩ đó không phải điều đáng tự hào.'],
['Một lần tự chuẩn bị','An tự xếp đủ đồ đi học lần đầu và muốn ghi nhớ bước tiến này.'],
['Dám hỏi trước lớp','My đã hỏi cô điều chưa hiểu dù trước đây thường giữ im lặng.'],
['Biết sửa sau khi sai','Bình làm rơi đồ rồi chủ động nhặt lại thay vì giấu đi như trước.'],
['Điểm mạnh không giống bạn','Nam không chạy nhanh nhưng rất khéo sắp xếp đồ dùng chung của nhóm.']]},
{category:'Cảm xúc',skill:'chấp nhận sai sót và rút ra điều học được',explain:'Phân biệt sai sót với con người. Nhận phần việc của mình, sửa ảnh hưởng nếu có và tìm điều cần đổi lần sau. Không bêu tên hay phạt bản thân vì một lần nhầm.',remember:'Sai một việc, học thêm một điều.',application:'Kể một sai sót nhỏ, một cách sửa và một điều rút ra.',cases:[
['Mang nhầm quyển vở','Hà lấy nhầm vở trong cặp và sợ nói với cô về việc đó.'],
['Đọc nhầm yêu cầu','An tô cả hai hình dù bài yêu cầu chỉ chọn một hình.'],
['Lỡ làm đổ nước','My chạm vào cốc nước trên bàn và lo bị gọi là vụng về.'],
['Đoán sai trong trò đố','Bình đoán sai khiến đội mất lượt, rồi nghĩ các bạn sẽ ghét mình.'],
['Nhớ nhầm ngày nộp','Nam nhớ nhầm ngày nộp tranh và cần cùng người lớn tìm cách báo lại.']]},
{category:'Cảm xúc',skill:'chuyển hoạt động bằng lời báo và bước kết thúc nhỏ',explain:'Biết trước việc sắp đổi giúp con dễ chuẩn bị. Thống nhất một bước kết thúc, cất phần đang làm để tiếp tục và nói cảm xúc của mình. Có thể nhờ người lớn báo trước bằng lời hoặc hình.',remember:'Biết sắp đổi, kết thúc một bước.',application:'Thử chuyển từ trò chơi sang cất đồ bằng ba bước thống nhất.',cases:[
['Đang chơi thì đến bữa','An chưa xong đường tàu đồ chơi trong khi cả nhà chuẩn bị ăn.'],
['Kết thúc giờ xem màn hình','Phim còn một đoạn nhưng đã đến điểm dừng cả nhà thống nhất.'],
['Từ sân chơi về lớp','My muốn chạy thêm nhưng tiếng báo vào lớp đã vang lên.'],
['Dừng bức tranh còn dang dở','Hà cần đi cùng gia đình và lo rằng mình sẽ quên ý tưởng đang vẽ.'],
['Trở lại nếp học sau kỳ nghỉ','Bình quen chơi muộn trong kỳ nghỉ và thấy khó bắt đầu việc học trở lại.']]},
{category:'Cảm xúc',skill:'nhận ra niềm vui nhỏ mà không phủ nhận cảm xúc khó',explain:'Có thể nhìn thấy điều dễ chịu dù ngày chưa hoàn hảo. Kể một khoảnh khắc thật và người hoặc việc góp phần tạo nó. Không bắt mình biết ơn để bỏ qua điều đang buồn.',remember:'Điều vui nhỏ vẫn đáng ghi nhớ.',application:'Vẽ một khoảnh khắc dễ chịu và kể vì sao con nhớ nó.',cases:[
['Một buổi sáng có nắng','Ly thấy tia nắng trên chậu cây sau một ngày mưa và muốn kể cho mẹ nghe.'],
['Bạn nhường một khoảng ngồi','Giờ đọc sách, một bạn dịch sang để An có chỗ ngồi cạnh.'],
['Ngày khó vẫn có điều tốt','My gặp một việc buồn ở lớp nhưng cũng có lúc được cô lắng nghe.'],
['Niềm vui không cần mua đồ','Bình vui khi cùng ông xếp giấy dù hôm đó không có món quà nào.'],
['Cùng nhau giữ một kỷ niệm','Gia đình muốn nhớ buổi đi bộ vui mà không cần chụp ảnh mọi lúc.']]},
{category:'Tự lập',skill:'lập danh sách kiểm tra ngắn cho việc thường ngày',explain:'Chia việc thành vài mục nhìn thấy được, làm xong mới đánh dấu. Danh sách giúp nhớ chứ không dùng để trách lỗi; bỏ bớt mục không cần và nhờ giúp khi quá nhiều.',remember:'Nhìn danh sách, làm rồi đánh dấu.',application:'Tạo danh sách ba mục cho một sinh hoạt của con.',cases:[
['Túi đồ học thể dục','Nam đến lớp mới nhớ mình quên đồ dùng cho tiết thể dục.'],
['Chuẩn bị đi thư viện','My cần mang thẻ và sách trả nhưng lo mình sẽ bỏ sót.'],
['Đồ cho một buổi vẽ','An bày màu rồi mới phát hiện thiếu giấy và khăn lau.'],
['Kiểm tra trước khi ra về','Hà hay để quên bình nước ở lớp dù cặp đã đóng.'],
['Danh sách quá dài','Bình có mười lăm việc nhỏ trên tờ giấy và không biết bắt đầu từ đâu.']]},
{category:'Tự lập',skill:'sắp xếp góc học theo nhu cầu sử dụng',explain:'Để vật hay dùng trong tầm với, đồ nặng ở vị trí ổn định do người lớn chọn. Giữ lối đi thoáng và không tự trèo lấy đồ cao; góc học không cần giống ảnh mẫu.',remember:'Dễ lấy, dễ cất, lối đi thông thoáng.',application:'Sắp xếp một vùng nhỏ trên bàn, không tự di chuyển đồ nặng.',cases:[
['Bàn học chỉ còn một góc','Đồ chơi phủ kín bàn khiến Ly phải kê vở lên đùi để viết.'],
['Bút lẫn với đồ linh tinh','An tìm tẩy giữa hộp đầy giấy vụn, dây và nắp bút.'],
['Sách thường đọc ở quá cao','My muốn tự lấy sách nhưng sách được đặt trên kệ vượt tầm với.'],
['Dây và cặp chắn đường','Bình để cặp và dây thiết bị cạnh ghế khiến người đi qua dễ vướng.'],
['Giữ chỗ cho bài đang làm','Hà cần cất bài thủ công chưa xong mà không làm mất các mảnh nhỏ.']]},
{category:'Tự lập',skill:'chăm sóc đồ dùng cá nhân và báo khi hỏng',explain:'Sử dụng đúng cách đã được hướng dẫn, kiểm tra trước khi cất và báo người lớn nếu hỏng. Không tự sửa điện, vật sắc hay đồ có nguy cơ làm đau; chăm đồ không có nghĩa đồ phải mới mãi.',remember:'Dùng cẩn thận, hỏng thì báo.',application:'Kiểm tra một đồ dùng an toàn và chọn cách cất phù hợp.',cases:[
['Hộp bút không đóng được','Bút đặt ngang khiến nắp hộp kẹt. An định cố ấn cho khép.'],
['Sách bị cong góc','My nhét sách dưới nhiều đồ nặng và thấy mép trang gập lại.'],
['Bình nước cần làm sạch','Hà dùng bình cả ngày và chưa biết nên nhờ hướng dẫn vệ sinh thế nào.'],
['Khóa cặp bị kẹt','Nam giật mạnh khóa cặp rồi lo sẽ bị trách nếu báo người lớn.'],
['Giày ướt sau cơn mưa','Bình muốn cất ngay đôi giày ướt vào chỗ kín cùng sách vở.']]},
{category:'Tự lập',skill:'tự chọn trang phục phù hợp với hoạt động và thời tiết',explain:'Xem hoạt động sắp làm và hỏi người lớn về thời tiết, chọn đồ vừa người, dễ vận động. Con được nói cảm giác nóng, lạnh hay khó chịu và nhờ trợ giúp với chi tiết chưa tự làm được.',remember:'Mặc để thoải mái và phù hợp việc làm.',application:'Chọn hai bộ đồ có sẵn cho hai hoạt động khác nhau.',cases:[
['Ngày có tiết vận động','Hà muốn mặc đồ đẹp nhưng khó cử động trong tiết thể dục.'],
['Áo làm con ngứa','An thấy nhãn áo cọ khó chịu nhưng sợ nói ra sẽ bị xem là kén chọn.'],
['Chuẩn bị áo khi trời đổi','Buổi sáng mát, trưa có thể nóng. My cần cùng mẹ chọn đồ phù hợp.'],
['Dây giày còn lỏng','Nam sắp ra sân chơi nhưng dây giày chưa buộc chắc.'],
['Chọn đồ cho chuyến đi','Bình định mang nhiều áo giống nhau nhưng chưa nghĩ đến hoạt động ngoài trời.']]},
{category:'Tự lập',skill:'giữ vệ sinh tay trong những sinh hoạt quen thuộc',explain:'Theo hướng dẫn của người lớn, rửa tay bằng xà phòng và nước sạch, chú ý các mặt bàn tay rồi làm khô. Không dùng chung khăn bẩn; báo người lớn khi thiếu đồ vệ sinh thay vì bỏ qua.',remember:'Tay sạch trước ăn, sau khi bẩn.',application:'Nhờ người lớn quan sát và hướng dẫn một lần rửa tay đúng cách.',cases:[
['Từ sân chơi đến bàn ăn','An chơi đất xong muốn lấy bánh ngay vì đang đói.'],
['Sau khi đi vệ sinh','My vội quay lại trò chơi và định bỏ qua việc rửa tay.'],
['Vừa chăm chậu cây','Nam có đất trên tay sau khi cùng bố chăm cây và muốn cầm sách.'],
['Xà phòng ở lớp đã hết','Hà thấy chỗ rửa tay thiếu xà phòng, chưa biết báo cho ai.'],
['Khăn tay bị bẩn','Bình mang khăn đã bẩn và được bạn mời dùng chung chiếc khăn khác.']]},
{category:'Tự lập',skill:'chủ động nói nhu cầu ăn uống và chăm sóc cơ thể',explain:'Nhận ra lúc đói, khát hoặc khó chịu và báo người lớn. Ăn uống ở chỗ phù hợp, ngồi yên và không ép mình ăn thật nhanh để thắng trò chơi; những yêu cầu sức khỏe riêng cần người lớn hướng dẫn.',remember:'Cơ thể cần gì, con được nói.',application:'Tập một lời báo nhu cầu bằng câu ngắn, rõ ràng.',cases:[
['Quên uống nước khi chơi','My mải ghép hình và nhận ra mình khát nhưng không muốn bỏ lượt.'],
['Con vẫn thấy đói','Bữa phụ chưa đủ với An, bạn muốn xin thêm mà sợ bị chê tham.'],
['Ăn vội để được chơi','Bình định vừa chạy vừa ăn để kịp nhóm bạn đang chơi.'],
['Món ăn làm con khó chịu','Hà thấy khó chịu sau một món và chưa biết diễn đạt cho người lớn.'],
['Bình nước đã cạn','Nam hết nước giữa buổi học và muốn biết nên xin hỗ trợ thế nào.']]},
{category:'Tự lập',skill:'chuẩn bị khoảng nghỉ và giờ ngủ cùng gia đình',explain:'Thống nhất nhịp sinh hoạt với người lớn, giảm việc kích thích khi chuẩn bị nghỉ và cất phần đang làm để tiếp tục sau. Khi mệt, ưu tiên nghỉ; bài học trong app có thể học vào dịp khác.',remember:'Biết dừng để nghỉ, mai mình tiếp tục.',application:'Chọn ba việc nhẹ cho lúc chuẩn bị nghỉ ngơi.',cases:[
['Còn muốn học thêm một bài','An đã ngáp nhưng muốn mở thêm bài học để hoàn thành thật nhiều.'],
['Đồ chơi cần cất trước khi nghỉ','My để trò ghép hình trên giường và không có chỗ nằm thoải mái.'],
['Nhớ việc ngày mai khi nằm xuống','Nam chợt lo quên mang sách và muốn ra kiểm tra cặp nhiều lần.'],
['Âm thanh làm con khó nghỉ','Hà muốn nhờ người thân nói nhỏ hơn khi mình đang chuẩn bị ngủ.'],
['Một ngày quá nhiều hoạt động','Bình mệt sau chuyến đi và cần cùng gia đình giảm bớt việc đã định làm.']]},
{category:'Tự lập',skill:'chia nhiệm vụ dài thành những bước có thể bắt đầu',explain:'Gọi tên kết quả cần làm, chia thành ba hoặc bốn bước nhỏ rồi làm bước đầu. Kiểm tra sau từng bước, có thời gian nghỉ và nhờ giúp ở phần chưa biết.',remember:'Việc lớn bắt đầu bằng một bước nhỏ.',application:'Vẽ ba ô cho ba bước của một việc con đang muốn làm.',cases:[
['Làm tấm thiệp sinh nhật','An nhìn giấy trắng và thấy làm cả tấm thiệp thật khó.'],
['Sắp một ngăn đồ chơi','My muốn dọn cả phòng ngay nên thấy nản trước khi bắt đầu.'],
['Chuẩn bị bài kể chuyện','Hà cần chọn truyện, nhớ ý và tập kể nhưng chưa biết làm bước nào trước.'],
['Trồng hạt cùng người lớn','Bình có hạt, đất và chậu nhưng chưa biết thứ tự chuẩn bị.'],
['Làm tập ảnh kỷ niệm','Nam muốn ghép một cuốn tập ảnh giấy nhưng có quá nhiều ảnh để chọn.']]},
{category:'Tự lập',skill:'ước lượng thời gian và điều chỉnh kế hoạch vừa sức',explain:'Đoán việc cần bao lâu rồi so với thời gian thật, không biến thành thi tốc độ. Chừa thời gian nghỉ và việc bất ngờ; khi thiếu thời gian, báo và cùng điều chỉnh thay vì bỏ nhu cầu cơ bản.',remember:'Ước lượng, thử làm, điều chỉnh.',application:'Cùng đo thời gian một việc ngắn mà không thúc giục.',cases:[
['Năm phút có đủ cất đồ','An hẹn xong ngay nhưng còn cả hộp đồ chơi cần phân loại.'],
['Đi từ lớp ra cổng','My thường quên tính thời gian cất sách và đi đến điểm đón.'],
['Tô tranh mất lâu hơn tưởng','Hà chọn tô quá nhiều chi tiết nên không kịp thời gian nhóm đã thống nhất.'],
['Chừa chỗ cho việc bất ngờ','Bình lên kế hoạch kín cả buổi và bối rối khi phải tìm một món đồ thất lạc.'],
['Một kế hoạch có giờ nghỉ','Nam định làm liên tục ba việc khó và chưa dành khoảng nghỉ nào.']]},
{category:'Tự lập',skill:'tập trung bằng cách giảm điều gây xao nhãng',explain:'Chọn một việc trong khoảng vừa sức, đặt đồ không cần sang bên và nhờ giảm tiếng ồn nếu có thể. Khi mất tập trung, trở lại bước đang làm; khó tập trung không phải lười.',remember:'Một việc trước mắt, quay lại nhẹ nhàng.',application:'Chuẩn bị góc làm một việc trong vài phút rồi cùng nhận xét.',cases:[
['Đồ chơi nằm trên vở','An liên tục cầm xe đồ chơi khi đang đọc một đoạn ngắn.'],
['Màn hình sáng bên cạnh','Thông báo trên thiết bị của người lớn khiến My thường xuyên ngoái nhìn.'],
['Nhiều người nói cùng lúc','Hà không nghe rõ hướng dẫn trong góc học nhiều tiếng chuyện trò.'],
['Chợt nghĩ đến trò chơi','Đang làm thiệp, Bình nghĩ ra trò khác và muốn bỏ dở ngay.'],
['Quên mình đang làm bước nào','Nam bị gọi giữa lúc xếp đồ và khi quay lại không nhớ đã kiểm tra gì.']]},
{category:'Tự lập',skill:'tự đánh giá việc đã làm bằng tiêu chí đơn giản',explain:'Trước khi làm, chọn vài dấu hiệu để biết đã xong. Sau đó kiểm tra từng dấu hiệu, tự sửa phần có thể sửa và nhờ góp ý phần còn khó. Hoàn thành vừa sức quan trọng hơn hoàn hảo.',remember:'Kiểm tra điều cần, không đòi hoàn hảo.',application:'Thống nhất hai tiêu chí cho một sản phẩm nhỏ rồi tự kiểm tra.',cases:[
['Tấm thiệp đã đủ thông tin','Hà trang trí đẹp nhưng chưa biết kiểm tra thiệp có tên người nhận hay chưa.'],
['Ngăn sách đã dễ lấy chưa','An xếp sách theo màu nhưng cuốn hay đọc bị kẹt phía trong.'],
['Bài kể có ai nghe hiểu','My thuộc lời kể nhưng muốn biết người nghe đã hiểu việc xảy ra chưa.'],
['Cặp đã sẵn sàng thật chưa','Bình đóng cặp xong rồi mới nhớ cần đối chiếu thời khóa biểu.'],
['Tranh không cần tô kín hết','Nam muốn tô lại liên tục dù bức tranh đã thể hiện rõ ý tưởng và tay đã mỏi.']]},
{category:'Tự lập',skill:'tìm cách xử lý khi thiếu đồ hoặc kế hoạch bị gián đoạn',explain:'Dừng để xác định thiếu gì, nghĩ phương án thay thế an toàn và hỏi trước khi mượn. Nếu chưa làm được, báo sớm để điều chỉnh; không lấy đồ của người khác hay tự làm việc nguy hiểm.',remember:'Thiếu một thứ, tìm một cách phù hợp.',application:'Giả sử thiếu một đồ dùng an toàn và đề xuất hai cách xử lý.',cases:[
['Quên bút chì ở nhà','An đến lớp mới thấy hộp bút không có bút chì cho hoạt động.'],
['Giấy màu không đủ','Nhóm My chỉ còn hai tờ giấy để làm sản phẩm đã dự định.'],
['Chưa in được hình mẫu','Hà muốn làm theo hình nhưng máy in gia đình chưa dùng được.'],
['Nơi chơi đang được dọn','Bình đến góc chơi quen thuộc và thấy người lớn đang dọn khu vực đó.'],
['Người hỗ trợ đang bận','Nam cần được giải thích nhưng người lớn chưa thể nghe ngay.']]},
{category:'Tình bạn',skill:'mời bạn tham gia mà tôn trọng quyền lựa chọn',explain:'Nói rõ trò chơi, mời một lần và nghe câu trả lời. Có thể đề nghị vai khác hay lần khác, không kéo tay hoặc chế giễu khi bạn từ chối. Chơi cùng là lựa chọn của cả hai.',remember:'Mời chân thành, tôn trọng câu trả lời.',application:'Đóng vai mời một người chơi và thực hành cả câu đồng ý lẫn từ chối.',cases:[
['Bạn đứng ngoài vòng chơi','Ly nhìn thấy một bạn quan sát trò chơi từ xa, chưa biết bạn có muốn tham gia không.'],
['Bạn thích xem trước','An mời bạn ghép hình nhưng bạn muốn nhìn cách chơi một lúc.'],
['Rủ bạn nhút nhát','My muốn rủ một bạn ít nói vào nhóm mà không khiến bạn bị chú ý quá nhiều.'],
['Bạn chọn trò khác','Nam mời chơi bóng nhưng bạn đang thích vẽ, khiến Nam hơi hụt hẫng.'],
['Mời em vào trò phù hợp','Bình muốn em nhỏ chơi cùng nhưng luật hiện tại quá khó với em.']]},
{category:'Tình bạn',skill:'tôn trọng đồ dùng và không gian riêng của bạn',explain:'Hỏi trước khi chạm hoặc mượn, nghe điều kiện và trả đúng hẹn. Không đọc sổ riêng hay mở cặp chỉ vì tò mò. Khi làm hỏng, nói thật và cùng người lớn tìm cách khắc phục.',remember:'Đồ của bạn, hỏi bạn trước.',application:'Thực hành mượn và trả một món đồ an toàn theo thỏa thuận.',cases:[
['Quyển sổ không muốn chia sẻ','Hà thấy bạn có sổ vẽ riêng và muốn lật xem dù bạn đã khép lại.'],
['Chiếc bút đang được dùng','An muốn mượn bút đúng lúc bạn vẫn đang viết bài.'],
['Đồ mượn chưa trả đúng hẹn','My giữ trò chơi của bạn lâu hơn dự tính và chưa báo lại.'],
['Bạn cần khoảng cách','Nam ngồi sát khiến bạn khó viết nhưng chưa nhận ra bạn cần thêm chỗ.'],
['Lỡ làm hỏng đồ bạn','Bình làm rách một trang sách mượn và đang phân vân có nên giấu đi.']]},
{category:'Tình bạn',skill:'chia việc theo khả năng và cùng theo dõi phần chung',explain:'Liệt kê các việc, hỏi mỗi người muốn và có thể làm gì rồi nhận phần rõ ràng. Kiểm tra xem có ai quá tải, có thể đổi vai; không mặc định bạn giỏi phải làm hết.',remember:'Mỗi người góp sức, cùng nhìn việc chung.',application:'Chia một hoạt động giấy thành ba phần cho hai người.',cases:[
['Ai cũng muốn làm trưởng nhóm','Các bạn muốn điều khiển nhưng chưa ai nhận chuẩn bị giấy và bút.'],
['Bạn viết đẹp bị giao hết','Nhóm nhờ Hà viết toàn bộ nội dung, khiến Hà không được tham gia phần mình thích.'],
['Một bạn chưa có phần việc','My thấy nhóm đã chia xong mà một bạn vẫn đứng ngoài, chưa biết làm gì.'],
['Phần của con đã xong','An hoàn thành phần mình nhưng nhóm còn một phần cần hỗ trợ.'],
['Đổi vai để cùng học','Nam luôn tô màu và muốn thử trình bày trong lần làm nhóm tiếp theo.']]},
{category:'Tình bạn',skill:'giải quyết bất đồng nhỏ bằng nhu cầu và phương án',explain:'Dừng lời gây tổn thương, mỗi người nói mình cần gì, cùng đưa ra ít nhất hai lựa chọn. Chọn cách cả hai chấp nhận; nếu có đe dọa hoặc xô đẩy, rời chỗ và nhờ người lớn.',remember:'Nghe nhu cầu, tìm hai cách.',application:'Đóng vai một bất đồng nhẹ và chọn cách cả hai thấy được.',cases:[
['Một tờ giấy, hai ý tưởng','Hà muốn vẽ thành phố, bạn muốn vẽ vườn trên tờ giấy chung.'],
['Luật chơi bị hiểu khác','An và Nam nhớ khác nhau về số lượt được chơi nên bắt đầu tranh cãi.'],
['Chỗ ngồi hai bạn cùng thích','My và Ly đều muốn ngồi cạnh cửa sổ trong buổi đọc sách.'],
['Bạn thay đổi trò giữa chừng','Bình chưa xong lượt nhưng bạn đề nghị chuyển sang trò mới ngay.'],
['Tiếng ồn khi bạn cần yên','Nhóm muốn trò chuyện trong khi một bạn cần yên để đọc hướng dẫn.']]},
{category:'Tình bạn',skill:'chơi công bằng khi thắng, thua hoặc chưa rõ kết quả',explain:'Thống nhất luật trước, chúc mừng nỗ lực và không chế giễu người thua. Khi chưa rõ kết quả, xem lại luật hoặc nhờ người trung lập; cảm giác buồn vì thua có thể nói ra.',remember:'Tôn trọng người chơi hơn kết quả.',application:'Chơi một trò ngắn và tập lời nói tử tế ở cả hai kết quả.',cases:[
['Vui vì thắng một lượt','Nam thắng rồi muốn trêu rằng bạn sẽ không bao giờ giỏi bằng mình.'],
['Thua liên tiếp hai lần','An muốn đổi luật giữa trò vì vừa thua hai lượt.'],
['Không ai thấy rõ kết quả','Hai bạn đặt quân gần như cùng lúc và đều nghĩ mình trước.'],
['Bạn mới chưa thuộc luật','My thấy bạn mới làm sai nhưng chưa được ai giải thích rõ.'],
['Đội thua không phải lỗi một bạn','Nhóm định đổ hết lỗi cho Bình sau khi không thắng trò chơi.']]},
{category:'Tình bạn',skill:'hỗ trợ bạn buồn mà không ép kể hay hứa giữ chuyện nguy hiểm',explain:'Hỏi bạn muốn được nghe, ngồi cạnh hay tìm người lớn. Không đoán cảm xúc thay bạn, không ép kể trước nhóm; khi bạn có nguy cơ bị hại, nhờ người lớn tin cậy hỗ trợ.',remember:'Hỏi bạn cần gì, cùng tìm người giúp.',application:'Tập ba câu hỏi nhẹ nhàng để hỗ trợ một người đang buồn.',cases:[
['Bạn im lặng giờ ra chơi','Ly thấy bạn ngồi riêng nhưng chưa biết bạn muốn yên tĩnh hay cần người trò chuyện.'],
['Bạn khóc vì mất đồ','An muốn an ủi bạn vừa làm thất lạc món đồ thân thuộc.'],
['Bạn không muốn nói lý do','My hỏi han nhưng bạn bảo chưa sẵn sàng kể chuyện.'],
['Bạn lo về chuyện ở lớp','Bình nghe bạn kể một việc khiến bạn sợ quay lại lớp.'],
['Bạn muốn có người đi cùng','Hà thấy bạn muốn kể với cô nhưng ngại đến gặp cô một mình.']]},
{category:'Tình bạn',skill:'tôn trọng khác biệt về khả năng và cách tham gia',explain:'Hỏi người bạn cần hỗ trợ gì thay vì tự quyết. Điều chỉnh trò chơi để nhiều người có thể tham gia, không bắt chước giễu cợt giọng nói, cơ thể hay cách học của bạn.',remember:'Hỏi nhu cầu, cùng tìm cách tham gia.',application:'Sửa một luật chơi để người có nhu cầu khác vẫn có lựa chọn.',cases:[
['Bạn cần thêm thời gian trả lời','An định trả lời hộ vì bạn nói chậm hơn cả nhóm.'],
['Trò chơi có nhiều bước nhảy','Một bạn khó tham gia phần nhảy. My muốn hỏi cách đổi hoạt động phù hợp.'],
['Bạn nghe chưa rõ hướng dẫn','Nam thấy bạn thường hỏi lại và vài người bắt đầu mất kiên nhẫn.'],
['Sở thích của bạn khác nhóm','Hà thích xem côn trùng qua sách trong khi các bạn thích vẽ hoa.'],
['Bạn chưa quen tiếng nói địa phương','Bình thấy bạn mới dùng vài từ khác mình và muốn hiểu thay vì cười.']]},
{category:'Tình bạn',skill:'từ chối sức ép của bạn và chọn hành động phù hợp',explain:'Nói ngắn điều mình không đồng ý, đề nghị lựa chọn khác nếu an toàn và rời đi khi bị ép. Một người bạn không có quyền đòi con làm điều gây hại để chứng minh tình bạn.',remember:'Bạn quý nhau không ép nhau làm sai.',application:'Tập câu từ chối và một câu rủ sang việc an toàn hơn.',cases:[
['Bạn rủ giấu đồ của người khác','Nhóm bảo An giấu hộp bút một bạn để trêu cho vui.'],
['Muốn chơi phải cho mượn tiền','Một bạn nói My chỉ được vào nhóm nếu đưa tiền mua đồ ăn.'],
['Thử thách khiến con không yên tâm','Nam bị rủ làm một động tác nguy hiểm để được khen gan dạ.'],
['Cùng nhau chê một bạn','Bình nghe nhóm yêu cầu mình phụ họa lời chê bạn khác.'],
['Bạn đòi chép bài','Hà muốn giúp bạn học nhưng bạn chỉ muốn Hà đưa bài để chép.']]},
{category:'Tình bạn',skill:'lên tiếng và tìm hỗ trợ khi thấy bạn bị đối xử không tốt',explain:'Không cười theo hay chia sẻ lời làm nhục. Nếu an toàn, mời bạn đến chỗ có người lớn và báo sự việc cụ thể. Không lao vào đánh nhau; người lớn có trách nhiệm bảo vệ trẻ.',remember:'Không hùa theo, tìm người hỗ trợ.',application:'Vẽ đường tìm một người lớn ở trường khi cần giúp bạn.',cases:[
['Biệt danh làm bạn tổn thương','Ly nghe vài bạn gọi một người bằng tên mà người đó đã nói không thích.'],
['Bạn bị bỏ ngoài nhóm cố ý','Nhóm liên tục ngăn An tham gia chỉ để làm An buồn.'],
['Một bức ảnh bị đem ra trêu','My thấy các bạn chuyền nhau ảnh làm một người xấu hổ.'],
['Đồ của bạn bị giấu nhiều lần','Nam nhận thấy hộp bút của bạn thường bị giấu dù bạn đã nhờ dừng.'],
['Bạn sợ kể với cô','Bình được bạn nói rằng sẽ bị trêu thêm nếu tìm người lớn giúp.']]},
{category:'Tình bạn',skill:'giữ tình bạn qua những thay đổi mà không kiểm soát bạn',explain:'Có thể nhớ bạn và hẹn một hoạt động phù hợp qua phụ huynh. Mỗi người được có thêm bạn và thời gian riêng; tình bạn không cần kiểm tra liên tục hay giữ bí mật với gia đình.',remember:'Quý bạn, vẫn cho bạn khoảng riêng.',application:'Nói một lời quan tâm và một lời tôn trọng lựa chọn của bạn.',cases:[
['Bạn chơi với nhóm khác','Hà thấy bạn thân chơi cùng người khác và nghĩ mình đã bị bỏ rơi.'],
['Một tuần không gặp nhau','An và bạn có lịch khác nhau nên chưa sắp xếp được buổi chơi.'],
['Bạn đổi sở thích','My vẫn thích một trò nhưng bạn đã muốn thử trò khác.'],
['Làm quen mà vẫn nhớ bạn cũ','Nam chuyển lớp và ngại kết bạn mới vì nghĩ như vậy là không trung thành.'],
['Hẹn lại sau lần bất đồng','Bình và bạn đã nói rõ chuyện cũ, muốn cùng chọn một hoạt động để chơi lại.']]},
{category:'An toàn',skill:'đi bộ cùng người lớn và dừng ở nơi sang đường phù hợp',explain:'Đi trên phần đường dành cho người đi bộ và theo hướng dẫn của người lớn đi cùng. Dừng trước khi sang đường, quan sát và chỉ đi khi được hướng dẫn an toàn; không chạy theo đồ rơi hoặc lời gọi ở phía bên kia.',remember:'Dừng lại, đi cùng người lớn.',application:'Cùng người lớn xem trên tranh một lối đi bộ an toàn; không thực hành giữa dòng xe.',cases:[
['Quả bóng lăn ra đường','Bóng của An lăn xuống lòng đường, An định đuổi theo ngay.'],
['Nghe gọi từ bên kia','My thấy bố ở phía bên kia đường và muốn chạy qua để gặp.'],
['Vỉa hè bị chắn','Hà và người lớn gặp đoạn vỉa hè có vật cản, cần cùng chọn lối đi phù hợp.'],
['Cổng trường nhiều xe','Bình tan học giữa nhiều xe đang di chuyển và chưa thấy người đón.'],
['Vừa đi vừa nhìn màn hình','Nam mải nhìn thiết bị nên không chú ý lối đi khi đang cùng gia đình ra ngoài.']]},
{category:'An toàn',skill:'chuẩn bị an toàn trước khi đạp xe hoặc vận động có bánh',explain:'Nhờ người lớn kiểm tra đồ bảo hộ vừa vặn, phương tiện và khu vực phù hợp. Chỉ chơi ở nơi được phép dưới sự giám sát, tránh dòng xe; dừng để nhờ giúp nếu đồ dùng trục trặc.',remember:'Kiểm tra trước, chơi ở nơi phù hợp.',application:'Kiểm tra mũ và phương tiện cùng người lớn khi chưa di chuyển.',cases:[
['Mũ bảo hộ còn lỏng','An đội mũ nhưng quai chưa vừa và nghĩ đội trên đầu là đủ.'],
['Xe có tiếng lạ','My thấy bánh xe phát tiếng khác thường trước buổi tập.'],
['Bạn rủ ra chỗ đông xe','Bình được rủ đạp xe ngoài khu vực gia đình đã cho phép.'],
['Muốn chở thêm bạn','Hà định chở bạn trên phương tiện không được người lớn hướng dẫn dùng như vậy.'],
['Giày và dây cần kiểm tra','Nam chuẩn bị vận động nhưng dây giày dài và chưa được buộc gọn.']]},
{category:'An toàn',skill:'giữ khoảng cách với nước và gọi trợ giúp thay vì tự cứu',explain:'Chỉ đến gần hoặc xuống nước khi người lớn có trách nhiệm cho phép và giám sát sát sao. Không với lấy đồ rơi hoặc nhảy xuống cứu người; gọi ngay người lớn hay nhân viên cứu hộ từ chỗ an toàn. Biết bơi vẫn cần giám sát.',remember:'Không tự xuống nước, gọi người giúp.',application:'Chỉ diễn bằng tranh ở nơi khô ráo, không tập ở mép hồ hay dùng nước sâu.',cases:[
['Đồ chơi rơi vào ao','An thấy đồ chơi nổi gần bờ ao và muốn với tay lấy lại.'],
['Bạn gọi giúp dưới nước','My nhìn thấy bạn gặp khó khăn trong nước và muốn tự nhảy xuống.'],
['Người trông con đang bận','Ở bể bơi, Bình muốn xuống nước khi người lớn đang nói chuyện ở xa.'],
['Vũng nước sau mưa lớn','Hà định lội vào đoạn đường ngập vì nhìn không thấy chướng ngại.'],
['Con biết bơi nên muốn đi một mình','Nam đã học bơi và nghĩ có thể tự ra hồ mà không cần người lớn đi cùng.']]},
{category:'An toàn',skill:'nhận biết nguy cơ cháy và làm theo kế hoạch thoát an toàn',explain:'Không nghịch lửa, diêm hay bật lửa. Khi có cháy hoặc báo động thật, báo người lớn, làm theo lối thoát an toàn đã được hướng dẫn, không trốn và không quay lại lấy đồ. Nếu chưa thoát được, gọi trợ giúp và không tự lao qua khói lửa.',remember:'Ra chỗ an toàn, không quay lại lấy đồ.',application:'Cùng người lớn xem kế hoạch thoát và điểm gặp của nhà; chỉ tập lúc an toàn, không tạo khói hay lửa.',cases:[
['Thấy chiếc bật lửa trên bàn','An tò mò muốn bật thử vật người lớn để quên.'],
['Đồ chơi còn trong phòng','Khi có báo động, My lo mất đồ chơi và định quay lại tìm.'],
['Nghe báo động ở trường','Bình muốn chạy tìm bạn trong khi cô đang hướng dẫn lớp di chuyển.'],
['Chưa biết điểm gặp gia đình','Hà nghe kế hoạch ra ngoài khi khẩn cấp nhưng chưa biết mọi người gặp ở đâu.'],
['Khói ở lối đi quen thuộc','Nam thấy lối thường đi có khói và cần gọi người lớn hỗ trợ thay vì chạy vào.']]},
{category:'An toàn',skill:'tránh thiết bị điện có dấu hiệu bất thường và báo người lớn',explain:'Không chọc vào ổ điện, chạm dây hở hoặc dùng thiết bị điện gần nước. Khi thấy hỏng, giữ khoảng cách và báo người lớn; trẻ không tự tháo sửa, rút dây ở chỗ ướt hay thử xem còn điện không.',remember:'Điện bất thường: tránh xa, báo ngay.',application:'Nhận diện nguy cơ trên tranh; không chạm thiết bị để thử bài học.',cases:[
['Ổ cắm ở gần chỗ chơi','An định đưa một vật nhỏ vào lỗ ổ cắm vì tò mò.'],
['Cốc nước cạnh thiết bị','My đặt nước sát thiết bị đang dùng và làm đổ một ít ra bàn.'],
['Dây sạc bị bong vỏ','Bình nhìn thấy dây sạc bị hỏng và muốn quấn lại để dùng tiếp.'],
['Thiết bị có mùi lạ','Hà thấy thiết bị có dấu hiệu khác thường khi người lớn đang ở phòng bên.'],
['Bóng bay mắc gần dây điện','Nam nhìn đồ chơi mắc gần dây điện và định dùng que dài khều xuống.']]},
{category:'An toàn',skill:'nhận ra đồ vật cần người lớn xử lý trong nhà',explain:'Không tự dùng thuốc, hóa chất, vật sắc, đồ nóng hay đồ không rõ công dụng. Giữ khoảng cách, báo người lớn và chờ hướng dẫn. Không nếm hay ngửi thử để đoán một chất là gì.',remember:'Không rõ hoặc có nguy cơ, để người lớn xử lý.',application:'Phân loại hình đồ vật thành “con được dùng khi đã học” và “cần người lớn”.',cases:[
['Viên thuốc giống kẹo','An thấy một viên màu đẹp rơi trên bàn và chưa biết đó là gì.'],
['Chai nước không có nhãn','My khát và nhìn thấy chai chứa chất lỏng không rõ nguồn gốc.'],
['Cốc vỡ trên sàn','Bình muốn tự nhặt các mảnh nhỏ để giúp dọn nhanh.'],
['Nồi còn nóng trong bếp','Hà muốn xem món ăn và định kéo nồi về phía mình.'],
['Vật lạ trong ngăn kéo','Nam tìm đồ chơi và thấy dụng cụ sắc chưa từng được hướng dẫn sử dụng.']]},
{category:'An toàn',skill:'nói ranh giới cơ thể và kể điều làm con không thoải mái',explain:'Cơ thể và vùng riêng tư của con cần được tôn trọng. Con được từ chối tiếp xúc hay yêu cầu xem, chụp cơ thể làm con bất an, rời đến nơi an toàn và kể người lớn tin cậy. Nếu chưa được giúp, tiếp tục kể người khác; việc người khác làm sai không phải lỗi của con.',remember:'Cơ thể con đáng được tôn trọng.',application:'Tập câu “Con không muốn” và “Con cần được giúp”; không diễn tiếp xúc hay ép kể chuyện riêng.',cases:[
['Không muốn bị cù tiếp','An đã nói dừng nhưng người chơi vẫn cù làm An khó chịu.'],
['Bức ảnh con không đồng ý','My không muốn một bức ảnh riêng tư của mình được chụp hoặc chia sẻ.'],
['Được tặng quà kèm yêu cầu lạ','Bình nhận lời hứa tặng quà nếu đồng ý một việc với cơ thể khiến mình lo.'],
['Người quen vẫn cần tôn trọng','Hà không muốn ngồi lên đùi một người quen nhưng sợ bị nói là không ngoan.'],
['Lời kể chưa được lắng nghe','Nam đã kể điều khiến mình bất an nhưng người đầu tiên chưa chú ý giúp.']]},
{category:'An toàn',skill:'giữ an toàn khi tách khỏi người đi cùng',explain:'Dừng ở khu vực an toàn gần nơi vừa tách, tìm quầy hỗ trợ hoặc nhân viên có trách nhiệm để nhờ liên hệ gia đình. Không tự đi tìm ở nhiều nơi hay theo người mời đến chỗ vắng. Thống nhất cách liên hệ với phụ huynh trước khi đi.',remember:'Dừng an toàn, nhờ hỗ trợ tại chỗ.',application:'Đóng vai ở nhà và tập nói mình cần liên hệ người thân; không thử cho trẻ lạc thật.',cases:[
['Không thấy mẹ trong hiệu sách','An quay lại kệ sách cũ nhưng không thấy mẹ đang đứng đó nữa.'],
['Lạc nhóm trong bảo tàng','My mải xem mô hình nên không theo kịp nhóm của cô.'],
['Điểm đón hôm nay khác','Bình chưa nghe rõ chỗ đón mới và muốn tự đi tìm ngoài cổng.'],
['Có người nói biết bố mẹ con','Một người đề nghị đưa Hà đến chỗ bố mẹ nhưng Hà chưa được xác nhận.'],
['Không nhớ số liên lạc','Nam cần nhờ nhân viên hỗ trợ mà không nhớ đầy đủ thông tin liên hệ gia đình.']]},
{category:'An toàn',skill:'bảo vệ thông tin cá nhân và tài khoản khi dùng mạng',explain:'Không đưa mật khẩu, mã xác nhận, địa chỉ hay ảnh riêng cho người khác. Nhờ phụ huynh kiểm tra trước khi nhập thông tin hoặc kết bạn; người quen trên mạng cũng cần được xác minh ngoài mạng qua người lớn.',remember:'Thông tin riêng, hỏi người lớn trước.',application:'Dùng dữ liệu giả trên giấy để chọn điều không được gửi; không nhập mật khẩu thật vào bài học.',cases:[
['Trò chơi hỏi tên trường','An được hứa quà nếu ghi tên trường và lớp đang học.'],
['Bạn xin mật khẩu để giúp','My được người trong trò chơi đề nghị đăng nhập hộ để tăng điểm.'],
['Một mã xác nhận gửi đến','Bình thấy người nhắn tin yêu cầu đọc mã vừa hiện trên thiết bị của gia đình.'],
['Ảnh có địa chỉ phía sau','Hà muốn gửi ảnh sản phẩm nhưng trong ảnh có thông tin địa chỉ nhà.'],
['Lời mời từ tên rất quen','Nam nhận tài khoản có tên giống bạn trong lớp nhưng chưa chắc là đúng người.']]},
{category:'An toàn',skill:'dừng tương tác và nhờ hỗ trợ khi gặp nội dung gây hại trên mạng',explain:'Không đáp trả lời đe dọa, không gửi tiếp nội dung làm nhục và không làm theo thử thách nguy hiểm. Dừng xem, báo phụ huynh để cùng chặn hoặc báo cáo; không phải tự giải quyết và không có lỗi vì vô tình gặp nội dung xấu.',remember:'Dừng xem, không gửi tiếp, kể người lớn.',application:'Dùng lời kể giả, không mở nội dung gây sợ để thực hành.',cases:[
['Video khiến con sợ','Một video không phù hợp tự xuất hiện khi An đang xem nội dung quen thuộc.'],
['Tin nhắn dọa nạt','My nhận lời đe dọa và lo rằng kể người lớn sẽ làm chuyện tệ hơn.'],
['Bạn gửi ảnh để cười nhạo','Bình được rủ chuyển tiếp ảnh chế làm một bạn xấu hổ.'],
['Thử thách trên mạng có nguy cơ','Hà xem thử thách dùng vật nguy hiểm và được rủ làm theo để đăng video.'],
['Người lạ muốn gặp riêng','Nam được người quen qua mạng hẹn ra gặp và dặn không kể gia đình.']]},
{category:'An toàn',skill:'dùng thiết bị theo thỏa thuận và xin phép trước thao tác mới',explain:'Cùng người lớn chọn nội dung, thời điểm nghỉ và điều được phép làm. Hỏi trước khi cài ứng dụng, mua đồ, bấm liên kết hoặc cho quyền truy cập. Nếu bấm nhầm, báo ngay để được giúp thay vì giấu.',remember:'Thao tác mới, hỏi trước một nhịp.',application:'Cùng lập ba điều thống nhất khi dùng thiết bị gia đình.',cases:[
['Nút nhận quà quá hấp dẫn','An thấy nút nhận phần thưởng nhưng chưa biết nó dẫn đến đâu.'],
['Trò chơi mời mua vật phẩm','My tưởng đồng ý mua vật phẩm chỉ dùng điểm trong trò chơi.'],
['Ứng dụng xin mở máy ảnh','Bình muốn chơi thử nhưng ứng dụng yêu cầu quyền dùng máy ảnh và vị trí.'],
['Lỡ bấm vào liên kết','Hà bấm nhầm đường dẫn và định đóng lại để không ai biết.'],
['Muốn xem thêm khi đã mệt','Nam mắt mỏi và khó chịu nhưng vẫn muốn kéo xem video tiếp theo.']]},
{category:'An toàn',skill:'báo sự việc cần giúp bằng thông tin ngắn và rõ',explain:'Từ nơi an toàn, gọi người lớn có trách nhiệm, nói ở đâu, chuyện gì đang xảy ra và ai cần hỗ trợ. Không quay lại kiểm tra nguy hiểm hay chen vào cứu hộ. Những thông tin không biết thì nói không biết, không đoán.',remember:'Nói nơi, nói việc, nhờ giúp ngay.',application:'Dùng sơ đồ nhà hoặc trường và đóng vai báo sự việc; không gọi số khẩn cấp để chơi.',cases:[
['Bạn ngã và cần người lớn','An thấy bạn ngã ở sân trường và cần báo cô đang đứng gần đó.'],
['Cửa bị kẹt không mở được','My ở chỗ có cửa kẹt và cần gọi người lớn giúp thay vì trèo ra.'],
['Thấy chỗ nguy hiểm ở hành lang','Bình thấy vật hỏng cản lối đi và muốn báo đúng vị trí cho thầy cô.'],
['Người hỗ trợ chưa nghe rõ','Hà nói quá nhanh khiến người lớn chưa hiểu ai đang cần giúp.'],
['Không biết mọi chi tiết','Nam chỉ nhìn thấy một phần sự việc và sợ không kể đủ thì không được giúp.']]},
{category:'An toàn',skill:'giữ an toàn khi di chuyển cùng gia đình hoặc nhà trường',explain:'Ở gần người phụ trách, chờ phương tiện dừng và làm theo hướng dẫn lên xuống. Dùng thiết bị bảo vệ đúng cách do người lớn kiểm tra, không tự mở cửa hay rời nhóm; hỏi lại khi điểm đón thay đổi.',remember:'Đi cùng người phụ trách, lên xuống theo hướng dẫn.',application:'Tập quy trình chờ và xác nhận người đón bằng ghế hoặc tranh ở nhà.',cases:[
['Chạy ra xe đang tới','An nhìn thấy xe đón và muốn lao đến trước khi xe dừng.'],
['Chưa cài bảo vệ đã đi','My lên xe và muốn bắt đầu chuyến đi trước khi người lớn kiểm tra chỗ ngồi.'],
['Muốn đứng khi xe di chuyển','Bình muốn đổi chỗ để ngồi gần bạn trong lúc phương tiện còn chạy.'],
['Ra khỏi xe mà quên báo','Hà định xuống trước cả nhóm vì thấy đồ mình thích ở gần đó.'],
['Người đón không giống kế hoạch','Nam thấy người khác đến đón và cần nhờ thầy cô xác nhận với gia đình.']]},
{category:'Trách nhiệm',skill:'nói thật về điều mình làm và phân biệt sự thật với suy đoán',explain:'Kể điều con biết hoặc đã làm, nói rõ phần mình không chắc và nhận trách nhiệm vừa sức. Người lớn cần nghe bình tĩnh để con dám nói thật; nói thật không có nghĩa phải kể thông tin riêng cho mọi người.',remember:'Biết thì kể đúng, chưa chắc thì nói chưa chắc.',application:'Tập ba câu: “Con đã…”, “Con nhìn thấy…”, “Con chưa biết…”.',cases:[
['Chiếc bánh đã được ăn','An lấy chiếc bánh để dành rồi muốn nói rằng mình không biết bánh ở đâu.'],
['Nhặt được tiền trong lớp','My thấy tiền dưới bàn nhưng không biết của ai và định giữ lại.'],
['Không phải điều con chứng kiến','Bình nghe bạn kể một chuyện và muốn kể lại như mình tận mắt thấy.'],
['Một điểm số nhớ nhầm','Hà nói sai điểm của mình do nhớ nhầm rồi ngại đính chính.'],
['Con chưa làm phần đã nhận','Nam chưa làm phần việc nhóm và cần báo thật để mọi người điều chỉnh.']]},
{category:'Trách nhiệm',skill:'giữ cam kết vừa sức và báo sớm khi cần thay đổi',explain:'Chỉ nhận việc hiểu rõ và có thể làm, nói lúc hoàn thành rồi chọn cách nhớ. Nếu vướng, báo sớm và đề nghị phương án mới. Cam kết không yêu cầu con cố làm khi đau, mệt hoặc không an toàn.',remember:'Nhận vừa sức, đổi thì báo sớm.',application:'Chọn một cam kết nhỏ, cách nhớ và người có thể hỗ trợ.',cases:[
['Nhận quá nhiều việc cùng lúc','An đồng ý giúp cả ba người rồi nhận ra không đủ thời gian.'],
['Quên phần chăm cây','My nhận tưới cây nhưng mải chơi và cần báo việc chưa làm.'],
['Hẹn trả sách đúng ngày','Bình mượn sách đến cuối tuần và muốn giữ thêm mà chưa hỏi.'],
['Bị mệt trước buổi làm nhóm','Hà đã hẹn tham gia nhưng hôm đó không khỏe và cần nhờ người lớn báo.'],
['Lời nhắc con tự chọn','Nam thường quên cất đồ chung dù thật lòng muốn giữ lời hứa.']]},
{category:'Trách nhiệm',skill:'lập kế hoạch dùng một khoản nhỏ với phụ huynh',explain:'Xem khoản được phép dùng, liệt kê lựa chọn và giữ một phần cho mục đích đã chọn nếu phù hợp. Đếm bằng tiền giả khi tập; việc mua bán thật cần phụ huynh hướng dẫn, không vay hay mua trên mạng tự ý.',remember:'Biết mình có, nghĩ trước khi dùng.',application:'Dùng mười thẻ giấy làm ngân sách giả và phân chia theo lựa chọn.',cases:[
['Hai món trong một khoản nhỏ','An có số thẻ mua hàng giả chỉ đủ một trong hai món đang muốn.'],
['Dành cho món đã định','My muốn tích lại một khoản nhỏ cho sách nhưng hôm nào cũng mua món lặt vặt.'],
['Mua xong cần kiểm tra','Bình tập mua hàng bằng thẻ giấy và chưa biết nhìn lại số thẻ còn lại.'],
['Khoản tiền không phải của con','Hà giữ hộ tiền của gia đình và định dùng tạm cho món mình thích.'],
['Chọn cách chia khoản nhỏ','Nam muốn vừa để dành vừa chọn một món nhỏ và cần tìm cách phân chia.']]},
{category:'Trách nhiệm',skill:'cân nhắc nhu cầu trước quảng cáo và lời mời mua',explain:'Hỏi món đó giúp việc gì, nhà đã có chưa và có thể chờ không. Quảng cáo có mục đích khiến mình muốn mua; nhờ phụ huynh kiểm tra thông tin và tổng chi phí, không quyết định chỉ vì quà tặng.',remember:'Cần gì thật, hỏi rồi mới chọn.',application:'So sánh hai món đồ có sẵn bằng công dụng, không dựa vào nhãn đẹp.',cases:[
['Món đồ vì ai cũng có','An muốn mua một món chỉ vì nhiều bạn trong lớp đang dùng.'],
['Quà tặng làm con quên nhu cầu','My định chọn món không cần chỉ vì được kèm một hình dán.'],
['Nhà đã có đồ tương tự','Bình thích hộp bút mới dù hộp ở nhà vẫn dùng tốt.'],
['Lời quảng cáo nghe quá hay','Hà nghe đồ chơi giúp giỏi ngay lập tức và tin mà chưa hỏi người lớn.'],
['Chờ một ngày rồi quyết định','Nam rất muốn mua ngay nhưng có thể ghi lại và xem còn muốn sau một thời gian.']]},
{category:'Trách nhiệm',skill:'dùng nước và vật dụng chung có chừng mực',explain:'Dùng lượng vừa đủ, tắt vòi khi đã xong nếu con thao tác an toàn và báo người lớn khi thấy rò rỉ. Tiết kiệm không có nghĩa bỏ uống nước, bỏ vệ sinh hay tự sửa thiết bị.',remember:'Dùng đủ nhu cầu, không để lãng phí.',application:'Quan sát một sinh hoạt và chọn một cách giảm lãng phí an toàn.',cases:[
['Vòi nước còn chảy','An rửa tay xong và đi ngay mà chưa kiểm tra vòi đã đóng.'],
['Lấy quá nhiều giấy lau','My rút nhiều giấy hơn cần dùng rồi định bỏ phần sạch vào thùng.'],
['Nước rò ở góc sân','Bình thấy đường ống rỉ và muốn tự tháo để sửa giúp.'],
['Rót vừa đủ để uống','Hà thường rót đầy cốc rồi bỏ phần còn lại dù có thể lấy thêm sau.'],
['Chia đồ dùng cho cả nhóm','Nam lấy nhiều vật liệu chung cho mình khiến nhóm khác không còn đủ.']]},
{category:'Trách nhiệm',skill:'giảm rác và phân loại theo hướng dẫn tại nơi sinh hoạt',explain:'Ưu tiên dùng lại đồ còn tốt và bỏ rác vào đúng nơi theo hướng dẫn địa phương. Chỉ cầm rác sạch, an toàn khi tập; vật sắc, pin hoặc chất lạ để người lớn xử lý. Không nhặt rác nguy hiểm để hoàn thành bài.',remember:'Dùng lại khi được, bỏ đúng nơi.',application:'Dùng giấy sạch và hộp rỗng an toàn để tập phân loại theo hướng dẫn gia đình.',cases:[
['Tờ giấy còn một mặt trắng','An định bỏ giấy mới dùng một mặt trong khi cần giấy nháp.'],
['Hộp cũ có thể dùng tiếp','My có một hộp sạch có thể cất đồ thay vì vứt ngay.'],
['Rác sau buổi ăn nhẹ','Bình thấy bàn còn vỏ đồ ăn và cần biết chỗ bỏ phù hợp.'],
['Pin cũ lẫn trong hộp đồ','Hà tìm thấy pin đã dùng và định bỏ cùng giấy sạch.'],
['Không rõ màu thùng rác','Nam đến một nơi có quy định thùng rác khác ở trường và cần hỏi lại.']]},
{category:'Trách nhiệm',skill:'chăm sóc không gian chung và sinh vật với sự hướng dẫn',explain:'Làm việc vừa sức, nhẹ nhàng và hỏi người phụ trách trước khi chạm cây hay vật nuôi. Không tự cho động vật ăn đồ lạ, tiếp cận con vật không quen hoặc nhận phần chăm sóc vượt khả năng.',remember:'Quan tâm bằng việc nhỏ, đúng cách.',application:'Chọn một việc chăm sóc an toàn được người lớn hướng dẫn.',cases:[
['Tưới cây không phải càng nhiều càng tốt','An muốn đổ nhiều nước vào chậu để cây lớn nhanh.'],
['Vật nuôi đang nghỉ','My muốn kéo vật nuôi dậy để chơi dù nó đang tìm chỗ yên.'],
['Gặp con vật không quen','Bình thấy con vật ngoài đường và muốn ôm về nhà ngay.'],
['Góc đọc chung cần gọn lại','Hà dùng xong góc sách và thấy chỗ ngồi cần trả lại cho người sau.'],
['Giúp chăm nhưng cần hỏi trước','Nam muốn cho vật nuôi ăn món mình đang có mà chưa biết có phù hợp không.']]},
{category:'Trách nhiệm',skill:'ra quyết định bằng lựa chọn và ảnh hưởng tới người khác',explain:'Nêu ít nhất hai lựa chọn, xem mỗi cách ảnh hưởng tới mình và người khác rồi chọn cách phù hợp. Với việc lớn hoặc có rủi ro, nhờ người lớn quyết định cùng; con được đổi ý khi có thông tin mới.',remember:'Có lựa chọn, nghĩ ảnh hưởng, rồi quyết định.',application:'Vẽ hai đường lựa chọn cho một việc nhỏ và kể kết quả có thể xảy ra.',cases:[
['Chọn hoạt động cho cả nhà','An muốn chọn trò mình thích nhưng chưa hỏi người khác có tham gia được không.'],
['Dùng món đồ cuối cùng','My thấy chỉ còn một tờ giấy màu mà hai người đều đang cần.'],
['Giúp ngay hay báo sẽ giúp sau','Bình đang làm việc có thời hạn khi bạn nhờ hỗ trợ một việc khác.'],
['Thay đổi khi biết thêm thông tin','Hà chọn chơi ngoài trời nhưng biết khu vực đó đang sửa chữa.'],
['Quyết định nhỏ con tự làm','Nam muốn tự chọn thứ tự hai việc an toàn thay vì hỏi người lớn từng bước.']]},
{category:'Trách nhiệm',skill:'kiểm tra thông tin trước khi tin hoặc kể tiếp',explain:'Hỏi ai nói, dựa vào đâu và có nguồn đáng tin nào xác nhận. Ảnh hay câu được nhiều người chia sẻ vẫn có thể sai. Khi chưa rõ, nói chưa biết và nhờ phụ huynh kiểm tra; không làm theo hướng dẫn có nguy cơ.',remember:'Nghe được chưa chắc đúng, kiểm tra trước.',application:'Phân biệt một câu quan sát thật, một ý thích và một điều cần kiểm tra.',cases:[
['Ai đó nói ngày mai nghỉ học','An nghe một bạn nói được nghỉ nhưng chưa có thông báo từ trường.'],
['Ảnh khiến con hiểu lầm','My chỉ thấy một phần bức ảnh và vội đoán điều xảy ra ngoài khung hình.'],
['Thích nhất không phải tốt nhất với mọi người','Bình nói trò mình thích là trò ai cũng phải thấy hay nhất.'],
['Câu chuyện được kể qua nhiều người','Hà nghe một chuyện đã qua vài người và mỗi lần lại có thêm chi tiết.'],
['Một mẹo lạ trên mạng','Nam thấy lời hướng dẫn có vẻ dễ làm nhưng chưa biết người viết có đáng tin không.']]},
{category:'Trách nhiệm',skill:'nhìn lại tiến bộ và chọn điều muốn tiếp tục luyện',explain:'Dựa vào một việc đã làm thật, nói điều dễ hơn và phần vẫn cần giúp. Chọn mục tiêu nhỏ cho lần tới; không cần hoàn thành liên tục hay so số bài với bạn. Học lại là một phần của tiến bộ.',remember:'Nhớ điều đã thử, chọn bước tiếp theo.',application:'Cùng ghi một tiến bộ cụ thể và chọn một bài muốn thực hành lại.',cases:[
['Điều con làm được khác trước','An nhìn lại và nhận ra mình đã tự nói lời nhờ giúp rõ hơn trước.'],
['Một kỹ năng vẫn còn khó','My đã học về chờ lượt nhưng đôi lúc vẫn sốt ruột và muốn luyện thêm.'],
['Cảm ơn người đã đồng hành','Bình muốn ghi lại ai đã lắng nghe, làm mẫu và giúp mình trong các buổi học.'],
['Chọn mục tiêu cho chặng tới','Hà có nhiều điều muốn làm tốt và cần chọn một mục tiêu nhỏ để bắt đầu.'],
['365 điều hay, hành trình còn tiếp','Nam và gia đình nhìn lại bộ bài học, chọn một kỷ niệm đáng nhớ và một kỹ năng muốn mang vào cuộc sống.']]},
];

const practiceFormats=[
  'Cha mẹ kể lại tình huống, con chọn bước đầu tiên rồi đóng vai cách xử lý. Đổi vai một lần và nhận xét điều đã giúp người kia hiểu.',
  'Vẽ ba ô: việc xảy ra, lựa chọn của con, điều có thể xảy ra tiếp. Con kể lại bằng lời hoặc chỉ tranh; người lớn bổ sung một bước nếu cần.',
  'Mỗi người đề xuất một cách ứng xử. Cùng so sánh cách nào tôn trọng và phù hợp hơn, sau đó thử nói câu con đã chọn.',
  'Cha mẹ đóng vai nhân vật chưa biết xử lý và nhờ con hướng dẫn. Dừng sau mỗi bước để hỏi vì sao; không tạo khó khăn thật để thử con.',
  'Dùng giấy hoặc đồ vật an toàn để diễn lại tình huống. Con tự chọn lời nói và việc làm, rồi cùng chọn một dịp phù hợp để áp dụng.',
];
// Alternate skill areas and revisit them through five new situations across the year.
// Keep the reflection at the end of each pass, including lesson 365.
const conclusion=units[units.length-1];
const groups=['Giao tiếp','Cảm xúc','Tự lập','Tình bạn','An toàn','Trách nhiệm'].map(category=>units.slice(0,-1).filter(u=>u.category===category));
const orderedUnits=Array.from({length:Math.max(...groups.map(g=>g.length))},(_,i)=>groups.flatMap(g=>g[i]?[g[i]]:[])).flat().concat(conclusion);
export const additionalQuizzes=Array.from({length:5},(_,i)=>orderedUnits.map((unit,j)=>{
  const choices=skillChoices[unit.skill];
  if(!choices)throw new Error(`Thiếu lựa chọn cho kỹ năng: ${unit.skill}`);
  return makeQuiz(choices,31+i*orderedUnits.length+j);
})).flat();
export const additionalRows=Array.from({length:5},(_,i)=>orderedUnits.map(unit=>{const [title,story]=unit.cases[i];return [
  title,unit.category,`Con biết ${unit.skill}.`,story,
  `${['Nhân vật đang gặp khó khăn gì? Nếu là con, con sẽ làm gì trước?','Có những cách xử lý nào? Cách con chọn giúp ích như thế nào?','Con có thể nói câu gì trong tình huống này? Người nghe cần hiểu điều gì?','Điều gì có thể xảy ra nếu chưa xử lý việc này? Con cần ai hỗ trợ?','Con chọn hành động nào và vì sao? Khi gặp điều tương tự, con sẽ bắt đầu thế nào?'][i]}`,
  unit.explain,`${unit.category==='An toàn'?'Chỉ đóng vai bằng lời hoặc tranh; không tạo nguy hiểm thật và không ép con kể chuyện riêng. ':''}${practiceFormats[i]} Mục tiêu của lần thử: ${unit.skill}.`,unit.remember,unit.application,
] as [string,string,string,string,string,string,string,string,string]})).flat();
