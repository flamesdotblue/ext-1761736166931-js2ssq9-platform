import React from 'react';

export default function JDBCCode() {
  const code = `// File: ShowStuRec.java
// Compile: javac ShowStuRec.java
// Run:     java ShowStuRec
// Requires: MySQL JDBC driver on classpath (e.g., mysql-connector-j.jar)

import java.sql.*;
import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;

public class ShowStuRec {
    // Adjust DB credentials and URL as needed
    private static final String URL = "jdbc:mysql://localhost:3306/college_db?useSSL=false&serverTimezone=UTC";
    private static final String USER = "root";
    private static final String PASS = "password";

    public static void main(String[] args) {
        String query = "SELECT enroll_no, name, address, mobile_no, email_id FROM StuRec ORDER BY enroll_no";

        try (Connection con = DriverManager.getConnection(URL, USER, PASS);
             PreparedStatement ps = con.prepareStatement(query);
             ResultSet rs = ps.executeQuery()) {

            // 1) Print to console
            System.out.printf("%-12s %-20s %-30s %-15s %-30s%n", "Enroll No", "Name", "Address", "Mobile No", "Email-ID");
            System.out.println("-".repeat(112));
            while (rs.next()) {
                String enroll = rs.getString("enroll_no");
                String name = rs.getString("name");
                String address = rs.getString("address");
                String mobile = rs.getString("mobile_no");
                String email = rs.getString("email_id");
                System.out.printf("%-12s %-20s %-30s %-15s %-30s%n", enroll, name, address, mobile, email);
            }

            // 2) Also render results in a Swing JTable window
            rs.beforeFirst(); // Move cursor back to start (requires TYPE_SCROLL_INSENSITIVE or re-execute)
        } catch (SQLException e) {
            // If beforeFirst() fails because default result set is forward-only, re-run with scrollable type
            try (Connection con = DriverManager.getConnection(URL, USER, PASS);
                 PreparedStatement ps = con.prepareStatement(
                     "SELECT enroll_no, name, address, mobile_no, email_id FROM StuRec ORDER BY enroll_no",
                     ResultSet.TYPE_SCROLL_INSENSITIVE,
                     ResultSet.CONCUR_READ_ONLY
                 );
                 ResultSet rs = ps.executeQuery()) {

                DefaultTableModel model = new DefaultTableModel(
                    new Object[]{"Enroll No", "Name", "Address", "Mobile No", "Email-ID"}, 0
                );

                while (rs.next()) {
                    model.addRow(new Object[]{
                        rs.getString("enroll_no"),
                        rs.getString("name"),
                        rs.getString("address"),
                        rs.getString("mobile_no"),
                        rs.getString("email_id")
                    });
                }

                JTable table = new JTable(model);
                table.setFillsViewportHeight(true);

                JFrame frame = new JFrame("StuRec - Student Records");
                frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
                frame.setSize(900, 400);
                frame.setLocationRelativeTo(null);
                frame.setLayout(new BorderLayout());
                frame.add(new JScrollPane(table), BorderLayout.CENTER);
                frame.setVisible(true);
            } catch (SQLException ex) {
                ex.printStackTrace();
                JOptionPane.showMessageDialog(null, "Database error: " + ex.getMessage());
            }
            return;
        }

        // If no exception occurred, open a minimal Swing table using a fresh query
        try (Connection con = DriverManager.getConnection(URL, USER, PASS);
             PreparedStatement ps = con.prepareStatement(
                 "SELECT enroll_no, name, address, mobile_no, email_id FROM StuRec ORDER BY enroll_no",
                 ResultSet.TYPE_SCROLL_INSENSITIVE,
                 ResultSet.CONCUR_READ_ONLY
             );
             ResultSet rs = ps.executeQuery()) {

            DefaultTableModel model = new DefaultTableModel(
                new Object[]{"Enroll No", "Name", "Address", "Mobile No", "Email-ID"}, 0
            );

            while (rs.next()) {
                model.addRow(new Object[]{
                    rs.getString("enroll_no"),
                    rs.getString("name"),
                    rs.getString("address"),
                    rs.getString("mobile_no"),
                    rs.getString("email_id")
                });
            }

            JTable table = new JTable(model);
            table.setFillsViewportHeight(true);

            JFrame frame = new JFrame("StuRec - Student Records");
            frame.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
            frame.setSize(900, 400);
            frame.setLocationRelativeTo(null);
            frame.setLayout(new BorderLayout());
            frame.add(new JScrollPane(table), BorderLayout.CENTER);
            frame.setVisible(true);
        } catch (SQLException ex) {
            ex.printStackTrace();
            JOptionPane.showMessageDialog(null, "Database error: " + ex.getMessage());
        }
    }
}

/*
SQL Reference (MySQL):

CREATE TABLE StuRec (
  enroll_no VARCHAR(20) PRIMARY KEY,
  name      VARCHAR(100) NOT NULL,
  address   VARCHAR(255),
  mobile_no VARCHAR(20),
  email_id  VARCHAR(150)
);
*/`;

  return (
    <div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4 md:p-6 overflow-hidden">
      <pre className="whitespace-pre-wrap text-sm leading-relaxed overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
}
