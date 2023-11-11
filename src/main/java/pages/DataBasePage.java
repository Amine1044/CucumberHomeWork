package pages;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class DataBasePage {
	
	
	Connection connection = null;
	Statement statement= null;
	ResultSet resultSet = null;
	String data= null;
	public String getDataFromDb(String collumn_name) {
		try {
			//setting propertier of mysql==================================================================
			
			Class.forName("com.mysql.jdbc.Driver");
			String sqlUrl = "jdbc:mysql://localhost:3306/jdbc";
			String sqlUsername = "root";
			String sqlPAssword = "root";
			String sqlQuery = "Select * from Users;";
			
			//Create connection to the Local DataBAse =========================================================
			
			connection = DriverManager.getConnection(sqlUrl, sqlUsername, sqlPAssword);
			
			//Empowering the connection reference variable to execute queries ==============================
			
			statement = connection.createStatement();
			
			//delivering the query
			
			resultSet = statement.executeQuery(sqlQuery);
			
			//=====================================================================================
			
			while ( resultSet.next()) {
				data=resultSet.getString(collumn_name);
			}
			
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (resultSet != null) {
				try {
					resultSet.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
			if (connection!=null) {
				try {
					connection.close();
				} catch (SQLException e) {
					e.printStackTrace();
				}
			}
		}
		
		
		
		
		return data;
		
	}

}
