package com.Highradius;

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

/**
 * Servlet implementation class getUser
 */
@WebServlet("/advanceSearch")
public class advanceSearch extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public advanceSearch() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String invoice_id=request.getParameter("invoice_id");
		String cust_number=request.getParameter("cust_number");
		String buisness_year=request.getParameter("buisness_year");
		String doc_id=request.getParameter("doc_id");
		HashMap<Object, Object> Response=new HashMap<Object,Object>();
		ArrayList<RegisterPojo> Customers=new ArrayList<RegisterPojo>();
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","12345678");
			String sql="select * from winter_internship where invoice_id=? and cust_number=? and buisness_year=? and doc_id=?";
			System.out.println(sql);
			String countsql="select count(*) from winter_internship";
			PreparedStatement ps=connection.prepareStatement(sql);
			PreparedStatement ps1=connection.prepareStatement(countsql);
			ps.setString(1, invoice_id);
			ps.setString(2, cust_number);
			ps.setString(3, buisness_year);
			ps.setString(4, doc_id);
			
			ResultSet rs=ps.executeQuery();
			while(rs.next()) {
				RegisterPojo obj=new RegisterPojo(rs.getInt("sl_no"),rs.getString("business_code"),rs.getString("cust_number"),rs.getString("clear_date"),rs.getInt("buisness_year"),rs.getString("doc_id"),rs.getString("posting_date"),rs.getString("document_create_date"),rs.getString("document_create_date1"),rs.getString("due_in_date"),rs.getString("invoice_currency"),rs.getString("document_type"),rs.getString("posting_id"),rs.getString("area_business"),rs.getString("total_open_amount"),rs.getString("baseline_create_date"),rs.getString("cust_payment_terms"),rs.getString("invoice_id"),rs.getString("isOpen"),rs.getString("aging_bucket"),rs.getString("is_deleted"));
				Customers.add(obj);
			}
			ResultSet rs1=ps1.executeQuery();
			int count=0;
			while(rs1.next()) {
				count=rs1.getInt(1);
			}
			//System.out.println(count);
			
			Response.put("customers",Customers);
			Response.put("count",count);
			Gson gson=new Gson();
			String jsonResponse=gson.toJson(Response);
			response.setHeader("Access-Control-Allow-Origin","*");
			response.getWriter().append(jsonResponse);
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