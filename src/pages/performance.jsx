import React from "react";
import { PowerBIEmbed } from "powerbi-client-react";
import { models } from "powerbi-client";
import Sidebar from "../component/Sidebar";

const Dashboard = () => {
  return (
	<div className="flex">
      <Sidebar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">INC372 - Financial Report</h1>
        <PowerBIEmbed
        embedConfig={{
          type: "report", // Supported types: report, dashboard, tile, visual, qna, paginated report and create
          id: "8d4751e4-4b6c-4722-a791-ed07040ffaf1",
          embedUrl:
            "https://app.powerbi.com/reportEmbed?reportId=8d4751e4-4b6c-4722-a791-ed07040ffaf1&groupId=80fdbdde-34fc-41f1-804d-9930fd7a500b&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1DLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
          accessToken:
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkwxS2ZLRklfam5YYndXYzIyeFp4dzFzVUhIMCIsImtpZCI6IkwxS2ZLRklfam5YYndXYzIyeFp4dzFzVUhIMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNmY0NDMyZGMtMjBkMi00NDFkLWIxZGItYWMzMzgwYmE2MzNkLyIsImlhdCI6MTcxNjI5MzM2MSwibmJmIjoxNzE2MjkzMzYxLCJleHAiOjE3MTYyOTgzNTgsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84V0FBQUFyd3JuMGhpaEZYM3dISGlsdnFJS0dhK2tTL2dSNjg4Zmw0ZkY3b0RYWmc0Rmx0YWZlQWY3U3Urcm9oVW15ckVPIiwiYW1yIjpbInB3ZCIsInJzYSJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImRldmljZWlkIjoiOTE1ZmFlNGQtMzk3MS00ZjcwLTllZmUtZDg3N2E0ODlhZDJiIiwiZmFtaWx5X25hbWUiOiJOR0FXU1VXQU4iLCJnaXZlbl9uYW1lIjoiQVJOQVQiLCJpcGFkZHIiOiIxMTAuNzcuMjI4LjE2OSIsIm5hbWUiOiJBUk5BVCBOR0FXU1VXQU4iLCJvaWQiOiI3ZjdiMmExYy03ODBiLTRhZTktYTMwMC03NzQ2ZDI4MDMwY2EiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMTI0NzM4OTUwOS02OTI5NTgwOTAtMTQ4NTAxMTI1NS04MjU2OSIsInB1aWQiOiIxMDAzMjAwMTY2Qzc0QzI0IiwicmgiOiIwLkFYSUEzREpFYjlJZ0hVU3gyNnd6Z0xwalBRa0FBQUFBQUFBQXdBQUFBQUFBQUFCeUFEQS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJEQ0g2cURQY2NCQ0lkYlVBc1F5NUJyVFBsTVdfMEdpQXcxR1RPZHl5SGdzIiwidGlkIjoiNmY0NDMyZGMtMjBkMi00NDFkLWIxZGItYWMzMzgwYmE2MzNkIiwidW5pcXVlX25hbWUiOiJhcm5hdC5uZ2F3QGttdXR0LmFjLnRoIiwidXBuIjoiYXJuYXQubmdhd0BrbXV0dC5hYy50aCIsInV0aSI6InVlSC00NUhKaEUtVVdqeXQyLWs2QUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.RkY0DLfNNdY7QAAyFooH9ABnSmeLg6iLaTbloVHLTLxRj8x9sPGUxzK6z-VK6tSzqXmVQ5SSvulQY0Lab55mogyfLAzXCkf3KLvW-a9VXFM3FGqW6ZgOf08AyquWo_CDSocFcoo_gmgspHNXa_J-4XV1ZBJa495esntnzaR4PglXHd7GnBTxZWD266lhrCqNYLph6M5ksZIhsGXHtnzdx4hiI84PgaFu7m-uYOwN9Bo2iVmnXi6B_VBA2Psu3HneumXgp9vCVMpIlEZ99hwB0HVMUXQvBRBklic0pJfoB1usAikQokWWmeCVZyZcafIUZ-0oIcDFQU-gS4-BkCDZ6Q",
          tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false,
              },
            },
          },
        }}
        eventHandlers={
          new Map([
            [
              "loaded",
              function () {
                console.log("Report loaded");
              },
            ],
            [
              "rendered",
              function () {
                console.log("Report rendered");
              },
            ],
            [
              "error",
              function (event) {
                console.log(event.detail);
              },
            ],
            ["visualClicked", () => console.log("visual clicked")],
            ["pageChanged", (event) => console.log(event)],
          ])
        }
        cssClassName={"reportClass"}
        getEmbeddedComponent={(embeddedReport) => {
          window.report = embeddedReport;
        }}
      />
      </div>
    </div>
  );
};

export default Dashboard;
