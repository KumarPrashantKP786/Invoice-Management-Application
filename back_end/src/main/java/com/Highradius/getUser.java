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
@WebServlet("/getUser")
public class getUser extends HttpServlet {
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public getUser() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String orderBy=request.getParameter("orderby");
		String order=request.getParameter("order");
		if(orderBy==null) {
			orderBy="sl_no";
		}
		if(order==null) {
			order="ASC";
		} 
		int start=Integer.parseInt(request.getParameter("start"));
		int limit=Integer.parseInt(request.getParameter("limit"));
		HashMap<Object, Object> Response=new HashMap<Object,Object>();
		ArrayList<RegisterPojo> Customers=new ArrayList<RegisterPojo>();
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection connection=DriverManager.getConnection("jdbc:mysql://localhost:3306/grey_goose","root","12345678");
			String sql="select * from winter_internship order by "+orderBy+" "+order+" limit ?,?";
			System.out.println(sql);
			String countsql="select count(*) from winter_internship";
			PreparedStatement ps=connection.prepareStatement(sql);
			PreparedStatement ps1=connection.prepareStatement(countsql);
			ps.setInt(1, start);
			ps.setInt(2, limit);
			//System.out.println(ps);
			ResultSet rs=ps.executeQuery();
			ResultSet rs1=ps1.executeQuery();
			int count=0;
			while(rs1.next()) {
				count=rs1.getInt(1);
			}
			//System.out.println(count);
			while(rs.next()) {
				RegisterPojo obj=new RegisterPojo(rs.getInt("sl_no"),rs.getString("business_code"),rs.getString("cust_number"),rs.getString("clear_date"),rs.getInt("buisness_year"),rs.getString("doc_id"),rs.getString("posting_date"),rs.getString("document_create_date"),rs.getString("document_create_date1"),rs.getString("due_in_date"),rs.getString("invoice_currency"),rs.getString("document_type"),rs.getString("posting_id"),rs.getString("area_business"),rs.getString("total_open_amount"),rs.getString("baseline_create_date"),rs.getString("cust_payment_terms"),rs.getString("invoice_id"),rs.getString("isOpen"),rs.getString("aging_bucket"),rs.getString("is_deleted"));
				Customers.add(obj);
			}
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