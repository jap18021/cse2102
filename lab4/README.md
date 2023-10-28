### Lab 4 Setup - CSE2102 (Team Otters)

# 1. Initialize the program

First, get the program onto your machine.

## 1.1 Clone Repository

Load this program onto your local machine. This can be done by running this command in the terminal:

```
git clone https://github.com/ths20003/cse2102.git
```

## 1.2 Adjust Directory

Make sure that you are in the correct directory. Navigate to Lab 0 with `cd cse2102/lab4/spr/demo` in the terminal.

# 2. Prepare and Launch the serve

## 2.1 Package and Test

In the demo directory, use `./mvnw package` and `./mvnw test` to ensure that there are no build failures.

# 2.2 Run server

Let's get our server running with `./mvnw spring-booot:run`

If you are running this in the VM, you will get a prompt to open the site in the browser.

If you are not using this with a VM, then you will be able to access the server with the following URL in your web browser:

`https://<YOUR MACHINE>/proxy/8099/`EX: `https://jap18021-vm.cse.uconn.edu/proxy/8099/`

### If done properly, the program should successfully run.
