import javax.servlet.annotation.WebServlet;
import com.google.gson.Gson;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.stream.Collectors;
import java.io.IOException;

@WebServlet("/tweets/*")
public class TwitterServlets extends HttpServlet {

    private static Posts posts = new Posts();

    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        response.setContentType("application/json");
        String[] url = request.getRequestURI().split("/");
        if(url[2].equals("add")){ response.getWriter().print((new Gson()).toJson(posts.addPost((new Gson()).fromJson(request.getReader().readLine(), Post.class)))); }
        if (url[2].equals("edit")){ response.getWriter().print((new Gson()).toJson(posts.editPost(request.getParameter("id"), (new Gson()).fromJson(request.getReader().readLine(), Post.class)))); }
    }


    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        String id = request.getParameter("id");
        response.setContentType("application/json");
        response.getWriter().print((new Gson()).toJson(posts.getPost(id)));
    }


    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        response.setContentType("application/json");
        String[] url = request.getRequestURI().split("/");

        if (url.length == 3 && url[2].equals("search")) {
            Gson gson = new Gson();
            response.getWriter().print(posts.getAllPosts().stream().map(gson::toJson).collect(Collectors.joining("\n")));
        }
    }


    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

        String id = request.getParameter("id");
        response.setContentType("application/json");
        response.getWriter().print((new Gson()).toJson(posts.removePost(id)));
    }

}
