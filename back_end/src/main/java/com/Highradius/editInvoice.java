package com.Highradius;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class editInvoice
 */
@WebServlet("/editInvoice")
public class editInvoice extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public editInvoice() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try {
			HashMap<Object,Object> Response=new HashMap<Object,Object>();
			String invoice_currency=request.getParameter("invoice_currency");
			String cust_payment_terms=request.getParameter("cust_payment_terms");
			int sl_no=Integer.parseInt(request.getParameter("sl_no"));
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","12345678");
			String sql="UPDATE winter_internship set invoice_currency=?,cust_payment_terms=? where sl_no=? ";
			PreparedStatement ps=connection.prepareStatement(sql);
			ps.setString(1, invoice_currency);
			ps.setString(2, cust_payment_terms);
			ps.setInt(3, sl_no);
			if(ps.executeUpdate()>0) {
				Response.put("update", true);
			}
			else {
				Response.put("update", false);
			}
			
			Gson gson=new Gson();
			String JSONresponse=gson.toJson(Response);
			response.setHeader("Access-Control-Allow-Origin","*");
			response.getWriter().append(JSONresponse);
			
		}
		catch(Exception e) {
			e.printStackTrace();
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
